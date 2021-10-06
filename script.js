totopbutton=document.getElementById("totop");
window.onscroll=function(){scroll_function()};
function scroll_function() {
  if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){totopbutton.style.display="block";}
  else{totopbutton.style.display="none";}
}
function to_top() {
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}