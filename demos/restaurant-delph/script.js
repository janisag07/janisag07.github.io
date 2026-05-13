const $=(s,ctx=document)=>ctx.querySelector(s);const $$=(s,ctx=document)=>Array.from(ctx.querySelectorAll(s));
$('.menu-toggle')?.addEventListener('click',()=>$('.nav-links')?.classList.toggle('open'));
$$('.reveal').forEach(el=>new IntersectionObserver(([e],obs)=>{if(e.isIntersecting){el.classList.add('visible');obs.disconnect()}},{threshold:.15}).observe(el));
const orderState={};
function money(n){return n.toLocaleString('de-DE',{style:'currency',currency:'EUR'})}
function refreshOrder(){let subtotal=0;$$('[data-dish]').forEach(row=>{const id=row.dataset.dish,price=parseFloat(row.dataset.price),qty=orderState[id]||0;row.querySelector('[data-qty]').textContent=qty;subtotal+=qty*price});const service=subtotal>0?0.00:0;$('#subtotal')&&($('#subtotal').textContent=money(subtotal));$('#service')&&($('#service').textContent=money(service));$('#total')&&($('#total').textContent=money(subtotal+service));$('#pickupTime')&&($('#pickupTime').textContent=subtotal>0?'ca. 25–35 Minuten':'–')}
$$('[data-action]').forEach(btn=>btn.addEventListener('click',()=>{const row=btn.closest('[data-dish]');const id=row.dataset.dish;orderState[id]=Math.max(0,(orderState[id]||0)+(btn.dataset.action==='plus'?1:-1));refreshOrder()}));
refreshOrder();
$$('form[data-success]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const target=$(form.dataset.success);if(target){target.classList.add('show');target.scrollIntoView({behavior:'smooth',block:'center'})}form.reset();if(form.id==='orderForm'){Object.keys(orderState).forEach(k=>orderState[k]=0);refreshOrder()}}));
const dateInputs=$$('input[type="date"]');if(dateInputs.length){const d=new Date();d.setDate(d.getDate()+1);const v=d.toISOString().slice(0,10);dateInputs.forEach(i=>{i.min=v;if(!i.value)i.value=v})}
