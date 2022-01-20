$(document).ready(function(){
  //trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  });
  $('.gnb a').click(function(){
    $('.gnb').addClass('active');
    $('.trigger').removeClass('active');
  })

  //Sliding jQuery
  $('.gnb a, .top').click(function(e) {
    e.preventDefault();
    $.scrollTo(0, 800);
});

  //Header Scroll Change
  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('header,.top').addClass('active');
    }
    else {
      $('header,.top').removeClass('active');
    }
  });

  //slick.js
  $('.myslider').slick({
    dots:true,
    speed:300,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint:1024,
        settings:{
          slidesToShow:3,
          slidesToScroll:3,
          infinite:true,
          dots:true
        }
      },
      {
        breakpoint:600,
        settings: {
          slidesToShow:2,
          slidesToScroll:2
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