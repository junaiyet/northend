$('.hero-area-bottom-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: '<i class="fas fa-arrow-left left-arrow"></i>',
  nextArrow: '<i class="fas fa-arrow-right right-arrow"></i>',
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
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
        dots: true,
        arrows: false,


      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".navigation").addClass("fixd-manu")
  } else {
    $(".navigation").removeClass("fixd-manu")
  }
})



  
    $(document).on('click','ul li', function(){
      $(this).addClass('active').siblings().removeClass('active')
    });

     

  // var filterizd = $('.filtr-container').filterizr({
  //      // options here
  //   });
    if ($('').filterizr) {
      $('.filtr-container').filterizr();
    }

// ////////////////////
// let dropdownBtn = document.querySelector('.menu-btn');
// let menuContent = document.querySelector('.menu-content');
// dropdownBtn.addEventListener('click',()=>{
//    if(menuContent.style.display===""){
//       menuContent.style.display="block";
//    } else {
//       menuContent.style.display="";
//    }
// })

// $(document).ready(function(){
//   $('.list').click(function(){
//     const value = $(this).attr('data-filter');
//     if (value == 'all'){
//       $('.gallery').show('1000')
//     }
//     else{
//       $('.gallery').not('.'+value).hide('1000')
//       $('.gallery').filter('.'+value).show('1000')

//     }
//   })
//   // active
//   $('.list').click(function(){
//     $(this).addClass('active').siblings().removeClass('active')
//   })
// })