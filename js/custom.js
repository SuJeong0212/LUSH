$(document).ready(function () {
  //trigger
  $('.trigger').click(function () {
    $(this).toggleClass('active');
    $('.gnb-m').toggleClass('active');
  });
  $('.gnb-m a').click(function () {
    $('.gnb-m').addClass('active');
    $('.trigger').removeClass('active');
  })

  //Sliding jQuery
  $('.top').click(function (e) {
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
  $('.gnb .active').removeClass('active');
  $('.gnb').find('[href="#' + anchor + '"]').addClass('active');
}

let gnb_inner = document.querySelectorAll('.gnb-inner')
let gnb_con = document.querySelectorAll('.con')
// let secCount = gnb_con.length;
// let con1 = gnb_con[1].offsetTop
// let con2 = gnb_con[2].offsetTop
// let con3 = gnb_con[3].offsetTop
// let con4 = gnb_con[4].offsetTop
// console.log(gnb_con[1].offsetTop);

// gnb_inner.addEventListener('click',() =>{
//   con1.scrollIntoView({behavior:"smooth"})
// })

gnb_inner.forEach((item, index)=>{
  item.addEventListener('click',function(){
    gnb_con[index].scrollIntoView({
      behavior:'smooth'
    });
  })
})

// navMenu[0].addEventListener('click', () => {
//   document.querySelector('#sec01').scrollIntoView({behavior:"smooth"});
// })
// navMenu[1].addEventListener('click', () => {
//   document.querySelector('#sec02').scrollIntoView({behavior:"smooth"});
// })
// navMenu[2].addEventListener('click', () => {
//   document.querySelector('#sec03').scrollIntoView({behavior:"smooth"});
// })
// navMenu[3].addEventListener('click', () => {
//   document.querySelector('#sec04').scrollIntoView({behavior:"smooth"});
// })