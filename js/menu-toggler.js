/* toggler */
var toggler = document.getElementById('toggler');
toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('main-nav__toggle--active');
}
/* menu */
var link = document.querySelector(".main-nav-toggle");
var menu = document.querySelector(".main-nav--mobile");
link.addEventListener("click", function(event) {
event.preventDefault();
menu.classList.toggle("main-nav-mobile--active");
})