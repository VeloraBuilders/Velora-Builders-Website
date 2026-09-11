const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
if(btn&&nav){
  const close=()=>{nav.classList.remove('open');btn.classList.remove('active');btn.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')};
  btn.addEventListener('click',()=>{const open=!nav.classList.contains('open');nav.classList.toggle('open',open);btn.classList.toggle('active',open);btn.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-open',open)});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
}
