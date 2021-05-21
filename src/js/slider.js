$(document).ready(function () {
  var $status = $('.reviews__number');
  var $slickElement = $('.slider');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
  });

  $('.slider').slick({
    autoplay: false,
    centerMode: true,
    arrows: false,
    centerPadding: '0',
    slidesToShow: 2,
    variableWidth: true,
    dots: false,
    // autoplaySpeed: 2000,
    speed: 500,
    easing: 'ease',
    asNavFor: '.reviews__text',
   responsive: [
            {
              breakpoint: 767,
       settings: {
                variableWidth: false,
                slidesToShow: 1,
                centerMode: false,
                
                
              },
            },
          ],









    // responsive: [
    //   {
    //     breakpoint: 320,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  });
});

$('.reviews__text').slick({
  // centerMode: true,
  arrows: false,
  centerPadding: '0',
  slidesToShow: 1,
  asNavFor: '.slider',
  // variableWidth: true,
  dots: false,
  asNavFor: '.slider',
  fade: true,
});
