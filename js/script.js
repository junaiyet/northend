$('.hero-area-bottom-slider').slick({
  dots: false,
  infinite: true,
  autoplay:true,
  arrows: true,
  prevArrow: '<i class="fas fa-arrow-left left-arrow"></i>',
  nextArrow: '<i class="fas fa-arrow-right right-arrow"></i>',
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:100,
  responsive: [{
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
        autoplay:true,
        dots: false,
        arrows: false,


      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        dots: false,
        arrows: false,

      }
    }
  ]
});
$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".navigation").addClass("fixd-manu")
  } else {
    $(".navigation").removeClass("fixd-manu")
  }

})



setTimeout(function(){
    $(".preloder-bg").fadeOut()
},3000)

  

     

  // var filterizd = $('.filtr-container').filterizr({
  //      // options here
  //   });
    if ($('').filterizr) {
      $('.filtr-container').filterizr();
    }
    $(document).on('click','ul li', function(){
      $(this).addClass('active').siblings().removeClass('active')
    });
