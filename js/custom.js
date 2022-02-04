$(document).ready(function () {
  //trigger
  $('.trigger').click(function () {
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  });
  $('.gnb a').click(function () {
    $('.gnb').addClass('active');
    $('.trigger').removeClass('active');
  })

  //Sliding jQuery
  $('.gnb a, .top').click(function (e) {
    e.preventDefault();
    $.scrollTo(0, 800);
  });

  //Header Scroll Change
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('header,.top').addClass('active');
    } else {
      $('header,.top').removeClass('active');
    }
  });

  //slick.js
  $('.myslider').slick({
    dots: true,
    speed: 300,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

})

//메뉴 스크롤 시 class추가
$(window).on('scroll', function () {
 
  var pos = $(window).scrollTop();
  var pos2 = pos + 50;
  var scrollBottom = pos + $(window).height();

  // Link Highlighting
  if (pos2 > $('#intro').offset().top)   { highlightLink('intro'); }
  if (pos2 > $('#about').offset().top) { highlightLink('about'); }
  if (pos2 > $('#product').offset().top)  { highlightLink('product'); }
  if (pos2 > $('#review').offset().top) { highlightLink('review'); }
  if (pos2 > $('#event').offset().top ||
      pos + $(window).height() === $(document).height()) {
        highlightLink('event');
  }

});

function highlightLink(anchor) {
  $('nav .active').removeClass('active');
  $("nav").find('[href="#' + anchor + '"]').addClass('active');
}