/* sub메뉴 배경 */

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

/* 메인 이미지 text */

(function(){
  var mainTxt = document.querySelector(".mainTxt");
  mainTxt.animate(
    {
      transform: [
        'translateY(0px)',
        'translateY(-320px)'
      ]
    },
    {
      duration: 500,
      fill: 'forwards',
      easing: 'ease-in-out'
    }
  );
})();

/* QnA */

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function() {
      var li = document.querySelectorAll(".show");

      for (i = 0; i < li.length; i++) {
        li[i].className = "qna-li hide";
      };
      document.querySelector(".qna-bottom").style.height = "300px";
      document.querySelector(".qna").style.height = "400px";
      document.querySelector(".contents").style.height = "800px";

      $('.hide').find('.qna-a').css({'display':'none'});
    }
  }
});

/* popup */
window.open("cs_popup.html", "cspopup", "width=410, height=210, top=200, left=200");