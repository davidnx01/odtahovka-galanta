/* Odťahová služba Galanta — menu, živé hodiny (Europe/Bratislava), demo formulár */
(function(){
  "use strict";
  var d=document, b=d.documentElement, btn=d.querySelector(".burger");
  if(btn){
    btn.addEventListener("click",function(){var o=b.classList.toggle("menu-open");btn.setAttribute("aria-expanded",o)});
    [].forEach.call(d.querySelectorAll(".nav a"),function(a){a.addEventListener("click",function(){b.classList.remove("menu-open");btn.setAttribute("aria-expanded","false")})});
  }
  var clocks=d.querySelectorAll("[data-clock]");
  function tick(){
    var t;
    try{t=new Intl.DateTimeFormat("sk-SK",{timeZone:"Europe/Bratislava",hour:"2-digit",minute:"2-digit",hour12:false}).format(new Date())}
    catch(e){var n=new Date();t=n.getHours()+":"+("0"+n.getMinutes()).slice(-2)}
    [].forEach.call(clocks,function(c){c.textContent=t;c.setAttribute("datetime",t)});
  }
  if(clocks.length){tick();setInterval(tick,30000)}
  var send=d.querySelector("[data-demo-send]");
  if(send){send.addEventListener("click",function(){
    var n=send.parentNode.querySelector(".form__note");
    n.textContent="Toto je neoficiálny návrh — správa sa neodosiela. Zavolajte prosím na 0911 135 211.";
  })}
})();
