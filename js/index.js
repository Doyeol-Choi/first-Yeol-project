var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopAdditionalSlides : 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
    autoplay : { 
        delay : 3000,   
        disableOnInteraction : false
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 150,
    loop: true,
    loopAdditionalSlides : 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var icon = document.getElementById("kakaoch_img");
var box = document.getElementById("kakaoimg_box");

box.onclick = function () {
    box.style.display = "none";
};

function show() {
    box.style.display = "block";
};

window.open("index_popup.html", "mainpopup", "width=510, height=310, top=200, left=200");