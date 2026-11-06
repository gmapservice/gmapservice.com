const nav=document.getElementById('nav');
const burger=document.getElementById('burger');
const navLinks=document.getElementById('navLinks');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>20),{passive:true});
burger.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');burger.setAttribute('aria-expanded',String(open));});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');burger.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
