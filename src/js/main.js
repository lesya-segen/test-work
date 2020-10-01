'use strict';

jQuery(function($){

  $(".toggle_menu").click(function() {
    $(".toggle_menu").toggleClass("on");
    $(".main_menu").toggleClass('active');
    $('body').toggleClass('deactive');
    return false;
  });

});

var h = document.querySelector(".main_head"),
    hHeight;

function onScroll() {
  window.addEventListener("scroll", callbackFunc);
  function callbackFunc() {
    var y = window.pageYOffset;
    if (y > 50) {
      h.classList.add("scroll");
    } else {
      h.classList.remove("scroll");
    }
  }
}

window.onload = function() {
  onScroll();
};