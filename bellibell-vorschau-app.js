(() => {
  'use strict';

  const state = {
    size: 74,
    season: 'winter',
    category: 'overall',
    growth: 'more',
    motif: 'blue'
  };

  const labels = {
    season: { winter: 'Kalte Tage / Winter', 'all-year': 'Übergang / ganzjährig' },
    category: { overall: 'Overall', set: 'Set aus Body & Hose', top: 'Shirt / Langarmshirt' },
    growth: { more: 'Möglichst lange mitwachsend', balanced: 'Ausgewogen', close: 'Jetzt eher körpernah' },
    motif: { blue: 'Blau & Berge', colorful: 'Bunt & Seilbahn', neutral: 'Ruhig & neutral', forest: 'Wald & Grün' }
  };

  const byId = id => document.getElementById(id);

  function text(id, value) {
    const node = byId(id);
    if (node) node.textContent = value;
  }

  function setActiveButtons() {
    document.querySelectorAll('[data-key][data-value]').forEach(button => {
      const active = String(state[button.dataset.key]) === button.dataset.value;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function makeReason(value) {
    const item = document.createElement('li');
    item.textContent = value;
    return item;
  }

  function makeAlternative(item) {
    const link = document.createElement('a');
    link.className = 'alternative';
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = '';
    image.loading = 'eager';

    const copy = document.createElement('span');
    const title = document.createElement('strong');
    title.textContent = item.title;
    const detail = document.createElement('small');
    detail.textContent = `${item.variant} · ${Number(item.price).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`;
    copy.append(title, detail);
    link.append(image, copy);
    return link;
  }

  function render() {
    setActiveButtons();
    text('catalog-count', `${window.BELLIBELL_CATALOG.length} Produkte im Katalog`);
    const result = window.BellibellAdvisor.recommend(state);
    const recommendation = byId('recommendation');
    const handoff = byId('handoff');

    text('request-summary', `Größe ${state.size} · ${labels.season[state.season]} · ${labels.category[state.category]} · ${labels.growth[state.growth]}`);
    text('team-input', `Kleidergröße ${state.size}, ${labels.season[state.season]}, ${labels.category[state.category]}, ${labels.growth[state.growth]}, ${labels.motif[state.motif]}`);

    const alternatives = byId('alternatives');
    const alternativesTitle = byId('alternatives-title');

    if (result.status === 'handoff') {
      recommendation.hidden = true;
      handoff.hidden = false;
      alternatives.replaceChildren();
      alternativesTitle.hidden = true;
      text('handoff-reason', result.reason);
      text('team-decision', 'Keine passende, saisonal belastbare Katalogkombination gefunden. Übergabe an das Bellibell-Team.');
      text('team-boundary', 'Es wird keine Empfehlung ausgegeben, wenn Größe, Produktart und Saison nicht gemeinsam durch die hinterlegten Produktdaten abgedeckt sind.');
      return;
    }

    recommendation.hidden = false;
    handoff.hidden = true;
    byId('product-image').src = result.product.image;
    byId('product-image').alt = result.product.title;
    text('product-title', result.product.title);
    text('product-price', Number(result.product.price).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
    text('product-variant', `Empfohlene Variante: ${result.variant}`);
    text('product-boundary', result.boundary);
    byId('product-link').href = result.product.url;

    const reasons = byId('reasons');
    reasons.replaceChildren(...result.reasons.map(makeReason));

    alternatives.replaceChildren(...result.alternatives.map(makeAlternative));
    alternativesTitle.hidden = result.alternatives.length === 0;

    text('team-decision', `${result.product.title}, Variante ${result.variant}. Begründung: ${result.reasons.join('; ')}.`);
    text('team-boundary', result.boundary);
  }

  document.querySelectorAll('[data-key][data-value]').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.key;
      state[key] = key === 'size' ? Number(button.dataset.value) : button.dataset.value;
      render();
    });
  });

  document.querySelectorAll('[data-view]').forEach(button => {
    button.addEventListener('click', () => {
      const view = button.dataset.view;
      document.querySelectorAll('[data-view]').forEach(tab => {
        const active = tab.dataset.view === view;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      document.querySelectorAll('[data-panel]').forEach(panel => {
        panel.hidden = panel.dataset.panel !== view;
      });
    });
  });

  const viewTabs = [...document.querySelectorAll('[role="tab"][data-view]')];
  viewTabs.forEach((tab, index) => {
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % viewTabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + viewTabs.length) % viewTabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = viewTabs.length - 1;
      viewTabs[nextIndex].focus();
      viewTabs[nextIndex].click();
    });
  });

  render();
})();
