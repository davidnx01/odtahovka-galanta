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
    [].forEach.call(clocks,function(c){c.textContent=t;c.setAttribute("datetime",t)});
  }
  if(clocks.length){tick();setInterval(tick,15000)}
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
