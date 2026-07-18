(function (root) {
  'use strict';

  const catalog = typeof require === 'function'
    ? require('./bellibell-vorschau-catalog.js')
    : root.BELLIBELL_CATALOG;

  const motifTerms = {
    blue: ['blaue', 'blau', 'eisberge'],
    colorful: ['bunte', 'rot', 'violette', 'goldene', 'seilbahn'],
    neutral: ['schwarz', 'grau', 'natur', 'bordeaux'],
    forest: ['wald', 'grüne', 'bergwald']
  };
  const motifLabels = {
    blue: 'Blau & Berge',
    colorful: 'Bunt & Seilbahn',
    neutral: 'Ruhig & neutral',
    forest: 'Wald & Grün'
  };

  function normalize(value) {
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function grams(product) {
    const source = [...(product.tags || []), product.title].join(' ');
    const match = source.match(/(?:grammatur:?\s*)?(180|210|230|250)\s*g/i);
    return match ? Number(match[1]) : null;
  }

  function seasonOf(product) {
    const source = normalize([...(product.tags || []), product.title].join(' '));
    if (source.includes('saison: winter') || [210, 230, 250].includes(grams(product))) return 'winter';
    return 'all-year';
  }

  function categoryOf(product) {
    const type = normalize(product.type);
    const title = normalize(product.title);
    if (type.includes('overal') || title.includes('overall')) return 'overall';
    if (type.includes('set') || title.includes('set:')) return 'set';
    if (type.includes('t-shirt') || type.includes('langarmshirt') || title.includes('shirt')) return 'top';
    if (type.includes('body')) return 'body';
    if (type.includes('hose')) return 'pants';
    return 'accessory';
  }

  function sizeNumbers(title) {
    return String(title || '').match(/\d+/g)?.map(Number) || [];
  }

  function chooseVariant(product, size, growth) {
    const options = (product.variants || []).filter(v => v.available && sizeNumbers(v.title).includes(Number(size)));
    if (!options.length) return null;
    if (options[0] && sizeNumbers(options[0].title).length === 1) return options[0];

    const rank = option => {
      const values = sizeNumbers(option.title);
      const index = values.indexOf(Number(size));
      if (growth === 'more') return index === 0 ? 30 : index === 1 ? 20 : 10;
      if (growth === 'close') return index === values.length - 1 ? 30 : index === 1 ? 20 : 10;
      return index === 1 ? 30 : index === 0 ? 20 : 10;
    };
    return [...options].sort((a, b) => rank(b) - rank(a))[0];
  }

  function motifScore(product, motif) {
    if (!motif || !motifTerms[motif]) return 0;
    const haystack = normalize([product.title, ...(product.tags || [])].join(' '));
    return motifTerms[motif].some(term => haystack.includes(normalize(term))) ? 4 : 0;
  }

  function recommend(input) {
    const size = Number(input.size);
    const category = input.category || 'overall';
    const season = input.season || 'all-year';
    const growth = input.growth || 'balanced';

    const sizedCategoryCandidates = catalog.map(product => {
      const variant = chooseVariant(product, size, growth);
      if (!variant || categoryOf(product) !== category) return null;
      return { product, variant };
    }).filter(Boolean);

    if (!sizedCategoryCandidates.length) {
      return {
        status: 'handoff',
        reason: `Im aktuellen Bellibell-Katalog ist für Größe ${size} in der gewählten Produktart keine passende Variante hinterlegt.`,
        nextStep: 'Anfrage mit den gewählten Angaben an das Bellibell-Team übergeben.'
      };
    }

    const candidates = sizedCategoryCandidates
      .filter(item => seasonOf(item.product) === season)
      .map(item => ({
        ...item,
        score: motifScore(item.product, input.motif) + (item.variant.available ? 2 : 0)
      }));

    if (!candidates.length) {
      const seasonLabel = season === 'winter' ? 'kalte Tage / Winter' : 'Übergang / ganzjährig';
      return {
        status: 'handoff',
        reason: `Für Größe ${size} und die gewählte Produktart ist im aktuellen Katalog keine eindeutig für „${seasonLabel}“ hinterlegte Kombination verfügbar.`,
        nextStep: 'Anfrage mit den gewählten Angaben an das Bellibell-Team übergeben.'
      };
    }

    const best = candidates.sort((a, b) => b.score - a.score || a.product.title.localeCompare(b.product.title, 'de'))[0];
    const productWeight = grams(best.product);
    const reasons = [];
    if (productWeight) reasons.push(`${productWeight} g/m² ${season === 'winter' ? 'für kalte Tage' : 'für den ganzjährigen Einsatz'}`);
    reasons.push(`Größenvariante ${best.variant.title} passend zur gewählten Größe ${size}`);
    reasons.push(`${best.product.title} entspricht der gewünschten Produktart`);
    if (motifScore(best.product, input.motif) > 0) {
      reasons.push(`Motivwunsch ${motifLabels[input.motif]} passt zur ausgewählten Variante`);
    }

    return {
      status: 'recommendation',
      product: {
        title: best.product.title,
        url: `https://bellibell.de/products/${best.product.handle}`,
        image: best.product.image,
        price: best.variant.price,
        weight: productWeight,
        category: categoryOf(best.product),
        season: seasonOf(best.product)
      },
      variant: best.variant.title,
      reasons,
      requiresHumanApproval: false,
      boundary: 'Verfügbarkeit und endgültige Passform werden vor dem Kauf im Bellibell-Shop geprüft.',
      alternatives: candidates.slice(1, 3).map(item => ({
        title: item.product.title,
        url: `https://bellibell.de/products/${item.product.handle}`,
        image: item.product.image,
        price: item.variant.price,
        variant: item.variant.title
      }))
    };
  }

  const api = { recommend, chooseVariant, categoryOf, seasonOf };
  if (typeof module !== 'undefined') module.exports = api;
  root.BellibellAdvisor = api;
})(typeof window !== 'undefined' ? window : globalThis);
