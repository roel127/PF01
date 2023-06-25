import $ from 'jquery';

$(function(){
  let windowW = $(window).width();
  if(windowW > 1155){
    scrollNav();
  }else if(windowW <= 1154 && windowW > 980){
    scrollNav();
  }else if(windowW <= 979 && windowW > 580){
    scrollNav();
    scrollNavMobile();
  }else if(windowW <= 579){
    scrollNav();
    scrollNavMobile();
  }
});

// nav
function scrollNav(){
  $('header nav li>a').on('click', function(){
    const hrefNav = $(this).attr('href');
    const aPos = $(hrefNav).offset().top;
    const headerHeight = $('header>div').innerHeight();
    $('html, body').animate({scrollTop: aPos - headerHeight}, 800);
  })
}
function scrollNavMobile(){
  $('header .btn').on('click', function(){
    $('header nav').show();
    $('header nav>.close').on('click', function(){
      $(this).parent().hide();
    })
  })
}
