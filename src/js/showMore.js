$('.content__btn-more').click(function() {
  $('.moreContentIsHiden').slideToggle();
  if ($('.content__btn-more').text() == "Less") {
    $(this).text("Read more")
  } else {
    $(this).text("Less")
  }
});

$('.program__button').click(function() {
  $('.program__more').slideToggle();
  if ($('.program__button').text() == "Read more") {
    $(this).text("Less")
  } else {
    $(this).text("Read more")
  }
});



