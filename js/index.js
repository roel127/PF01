import $ from 'jquery';

$(function(){
  let windowW = $(window).width();
  if(windowW > 1155){
    scrollNav();
  }else if(windowW <= 1154 && windowW > 980){

  }else if(windowW <= 979 && windowW > 580){

  }else if(windowW <= 579){

  }
});

// nav
function scrollNav(){
  $('header nav li>a').on('click', function(){
    const hrefNav = $(this).attr('href');
    console.log(hrefNav);
    const aPos = $(hrefNav).offset().top;
    const headerHeight = $('header>div').innerHeight();
    $('html, body').animate({scrollTop: aPos - headerHeight}, 800);
  })
}