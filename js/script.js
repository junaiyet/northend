$('.hero-area-bottom-slider').slick({
    dots: false,
    infinite: true,
    arrows:true,
    prevArrow:'<i class="fas fa-arrow-left left-arrow"></i>',
    nextArrow:'<i class="fas fa-arrow-right right-arrow"></i>',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
          arrows:false,


        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
          arrows:false,

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
$(window).scroll(function(){
  if($(window).scrollTop() > 0){
    $(".menu").addClass("fixd-manu")
  }else{
    $(".menu").removeClass("fixd-manu")
  }   
})

$(window).scroll(function(){
  if($(window).scrollTop() > 0){
    $(".nav-bg").addClass("fixd")
  }else{
    $(".nav-bg").removeClass("fixd")
  }   
})

// var mixitup = require('mixitup');


var containerEl = document.querySelector('.mixit-main');

            var mixer = mixitup(containerEl);
