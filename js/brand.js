var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopAdditionalSlides : 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 110,
    loop: true,
    loopAdditionalSlides : 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var subs = document.querySelectorAll(".sub");
var submenu = document.getElementById("submenu");
for (i = 0; i < subs.length; i++) {
  subs[i].addEventListener("mouseover", function(){
    submenu.style.backgroundColor = "#fff";
  });
  subs[i].addEventListener("mouseout", function(){
    submenu.style.backgroundColor = "";
  });
}