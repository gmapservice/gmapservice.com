const nav=document.getElementById('nav'),burger=document.getElementById('burger'),links=document.getElementById('navLinks');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>18),{passive:true});
burger.addEventListener('click',()=>{const open=links.classList.toggle('open');burger.setAttribute('aria-expanded',String(open));});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');burger.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
