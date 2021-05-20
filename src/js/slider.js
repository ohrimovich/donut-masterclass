$(document).ready(function () {
  var $status = $('.reviews__number');
  var $slickElement = $('.slider');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
  });

  $('.slider').slick({
    autoplay: true,
    centerMode: true,
    arrows: false,
    centerPadding: '0',
    slidesToShow: 2,
    variableWidth: true,
    dots: false,
    autoplaySpeed: 2000,
    speed: 1500,
    easing: 'ease',
    asNavFor: '.reviews-text',
    responsive: [
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  });
});

$('.reviews-text').slick({
  centerMode: true,
  arrows: false,
  centerPadding: '0',
  slidesToShow: 1,
  // variableWidth: true,
  dots: false,
  asNavFor: '.slider',
  fade: true,
});
