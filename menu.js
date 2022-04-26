var bte0 = document.getElementById('e0');
var e1 = document.getElementById('e1');
var e2 = document.getElementById('e2');
var e3 = document.getElementById('e3');
var e4 = document.getElementById('e4');
var e5 = document.getElementById('e5');
var cpt = 0;
bte0.addEventListener('click',function(){
     cpt = cpt + 1;
     if(cpt == 1)
     {
          e1.style.visibility = "visible";
          e1.style.transitionDelay ="0.13s";
          e2.style.visibility = "visible";
          e2.style.transitionDelay ="0.20s";
          e3.style.visibility = "visible";
          e3.style.transitionDelay ="0.27s";
          e4.style.visibility = "visible";
          e4.style.transitionDelay ="0.34s";
          e5.style.visibility = "visible";
          e5.style.transitionDelay ="0.42s";
     }
     else
     {
          e1.style.visibility = "hidden";
          e1.style.transitionDelay ="0.42s";
          e2.style.visibility = "hidden";
          e2.style.transitionDelay ="0.34s";
          e3.style.visibility = "hidden";
          e3.style.transitionDelay ="0.27s";
          e4.style.visibility = "hidden";
          e4.style.transitionDelay ="0.20s";
          e5.style.visibility = "hidden";
          e5.style.transitionDelay ="0.13s";
          cpt = 0;
     }
     
});