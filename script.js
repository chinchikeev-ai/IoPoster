const header=document.querySelector('.topbar');const reveals=document.querySelectorAll('.reveal');function update(){header.classList.toggle('scrolled',scrollY>20)}update();addEventListener('scroll',update,{passive:true});const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});reveals.forEach(el=>io.observe(el));

const menuToggle=document.querySelector('.menu-toggle');
const siteNav=document.querySelector('#site-nav');
function setMenuOpen(open){
  header.classList.toggle('menu-open',open);
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');
}
menuToggle.addEventListener('click',()=>setMenuOpen(menuToggle.getAttribute('aria-expanded')!=='true'));
siteNav.addEventListener('click',event=>{if(event.target.closest('a'))setMenuOpen(false)});
document.addEventListener('click',event=>{if(!header.contains(event.target))setMenuOpen(false)});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&header.classList.contains('menu-open')){
    setMenuOpen(false);
    menuToggle.focus();
  }
});
matchMedia('(max-width:980px)').addEventListener('change',()=>setMenuOpen(false));
