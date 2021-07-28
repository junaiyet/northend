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
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
