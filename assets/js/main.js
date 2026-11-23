/* Odťahová služba Galanta — menu, lepiaca hlavička, živý čas dispečingu (Europe/Bratislava) */
(function(){
  "use strict";
  var d=document, b=d.documentElement, btn=d.querySelector(".burger"), scrim=d.querySelector("[data-scrim]");
  function setMenu(o){b.classList.toggle("menu-open",o);if(btn)btn.setAttribute("aria-expanded",o);if(scrim)scrim.hidden=!o}
  if(btn){
    btn.addEventListener("click",function(){setMenu(!b.classList.contains("menu-open"))});
    if(scrim)scrim.addEventListener("click",function(){setMenu(false)});
    [].forEach.call(d.querySelectorAll(".nav a"),function(a){a.addEventListener("click",function(){setMenu(false)})});
    d.addEventListener("keydown",function(e){if(e.key==="Escape")setMenu(false)});
  }
  var top=d.querySelector(".top");
  function onScroll(){if(top)top.classList.toggle("top--stuck",window.scrollY>24)}
  onScroll();window.addEventListener("scroll",onScroll,{passive:true});
  var clocks=d.querySelectorAll("[data-clock]");
  function tick(){
    var t;
    try{t=new Intl.DateTimeFormat("sk-SK",{timeZone:"Europe/Bratislava",hour:"2-digit",minute:"2-digit",hour12:false}).format(new Date())}
    catch(e){var n=new Date();t=("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)}
    [].forEach.call(clocks,function(c){var p=t.split(":");c.innerHTML=p[0]+'<span class="colon">:</span>'+p[1];c.setAttribute("datetime",t)});
  }
  if(clocks.length){tick();setInterval(tick,15000)}

  /* pohyb: len keď ho človek nevypol */
  var calm=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var io="IntersectionObserver" in window;

  /* objavovanie obsahu pri rolovaní (bez JS ostáva všetko viditeľné) */
  if(io&&!calm){
    var groups=[".shead",".why__copy",".why__photos",".band__copy",".svc__grid",".reel",".price__side",".board",".refs__row",".refs__more",
      ".faq__side",".qa",".cta__in",".contact__copy",".contact__photo",".vals__row",".split__photo",".split__copy",".phero__photo",".phero__facts"];
    var solo={".reel":1,".refs__row":1,".board":1,".contact__photo":1,".split__photo":1,".phero__photo":1,".refs__more":1};
    var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("is-in");ro.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px",threshold:.12});
    groups.forEach(function(sel){[].forEach.call(d.querySelectorAll(sel),function(g){
      var items=solo[sel]?[g]:[].slice.call(g.children);
      items.forEach(function(el,i){el.setAttribute("data-r","");el.style.setProperty("--d",Math.min(i,6)*70+"ms");ro.observe(el)});
    })});
  }

  /* živé prvky (cesta v hero, zákruta vo výzve) bežia len keď sú vidieť */
  if(io){
    var lo=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle("is-live",e.isIntersecting)})});
    [].forEach.call(d.querySelectorAll("[data-live]"),function(el){lo.observe(el)});
  }

  /* jazda stránkou: stredové čiary sa posúvajú s rolovaním, značka ukazuje, kde na ceste ste */
  var roads=d.querySelectorAll(".road:not(.road--hero)"), trip=d.querySelector("[data-trip]"), ticking=false;
  function drive(){
    ticking=false;
    var y=window.scrollY, max=b.scrollHeight-window.innerHeight;
    if(!calm)[].forEach.call(roads,function(r){r.style.backgroundPositionX=(-y*.5)+"px"});
    if(trip)trip.style.setProperty("--p",max>0?Math.min(1,Math.max(0,y/max)):0);
  }
  window.addEventListener("scroll",function(){if(!ticking){ticking=true;requestAnimationFrame(drive)}},{passive:true});
  window.addEventListener("resize",drive);drive();
  var row=d.querySelector("[data-refs-row]");
  if(row){
    var prev=d.querySelector('[data-refs="-1"]'),next=d.querySelector('[data-refs="1"]');
    function upd(){var m=row.scrollWidth-row.clientWidth-2;if(prev)prev.disabled=row.scrollLeft<2;if(next)next.disabled=row.scrollLeft>m}
    [prev,next].forEach(function(bt){if(bt)bt.addEventListener("click",function(){
      var c=row.querySelector(".ref"),step=c?c.getBoundingClientRect().width+24:row.clientWidth*.8;
      row.scrollBy({left:step*Number(bt.getAttribute("data-refs"))*2,behavior:"smooth"})})});
    row.addEventListener("scroll",upd,{passive:true});upd();
  }
})();
