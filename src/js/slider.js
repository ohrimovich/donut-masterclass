$(document).ready(function () {
  var $status = $('.pagingInfo');
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
    autoplaySpeed: 3000,
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
