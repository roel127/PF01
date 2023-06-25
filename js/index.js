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
    swipe();
  }else if(windowW <= 579){
    scrollNav();
    scrollNavMobile();
    swipe();
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

// gallery
function swipe(){
  let figureW = $('#all figure').width();
  $('#all>figure:last').prependTo('#all');
  $('#all').css('margin-left', '-' + figureW + 'px');

  $('#gallery .prev').on('click', function(){
    $('#all').animate({marginLeft: '+=' + figureW + 'px'}, function(){
      $('#all>figure:last').prependTo('#all');
      $('#all').css('margin-left', '-' + figureW + 'px');
    });
  });
  $('#gallery>.next').on('click', function(){
    $('#all').animate({marginLeft: '-=' + figureW + 'px'}, function(){
      $('#all>figure:first').appendTo('#all');
      $('#all').css('margin-left', '-' + figureW + 'px');
    });
  });
}