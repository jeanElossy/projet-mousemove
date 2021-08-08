window.addEventListener("mousemove", mousemove);
function mousemove(e){
  document.querySelector(".container").style.left = e.pageX + "px";
  document.querySelector(".container").style.top = e.pageY + "px";
}