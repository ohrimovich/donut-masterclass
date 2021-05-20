$('.content__btn-more').click(function() {
  $('.moreContentIsHiden').slideToggle();
  if ($('.content__btn-more').text() == "Read more") {
    $(this).text("Less")
  } else {
    $(this).text("Read more")
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



