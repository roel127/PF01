import $ from 'jquery';

$(function(){
  let windowW = $(window).width();
  if(windowW > 1155){
    scrollNav();
    backgroundClick();
    top();
  }else if(windowW <= 1154 && windowW > 980){
    scrollNav();
    backgroundClick();
    top();
  }else if(windowW <= 979 && windowW > 580){
    scrollNav();
    navMobile();
    swipe();
    backgroundClick();
  }else if(windowW <= 579){
    scrollNav();
    navMobile();
    swipe();
    backgroundClick();
    skillAct();
  }
});

// nav
function scrollNav(){
  $('header nav li>a').on('click', function(){
    const hrefNav = $(this).attr('href');
    const aPos = $(hrefNav).offset().top;
    const headerHeight = $('header>div').innerHeight();
    $('html, body').stop().animate({scrollTop: aPos - headerHeight}, 800);
    return false;
  })
}
function navMobile(){
  $('header .btn').on('click', function(){
    $('header nav').slideToggle();
    $('header nav>.close').on('click', function(){
      $(this).parent().slideUp();
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

// gallery filter
function galleryFilter(){
  // filter의 string 값을 가져와서 포함 된 figure만 보이기
}

// modal
function modalFunc(tl, pic, yr, pg, url, txt){
  this.title = tl;
  this.pic = `./img/${pic}.png`;
  this.year = yr;
  this.program = pg;
  this.url = url;
  this.text = txt;
}
modalFunc.prototype.viewAction = function(){
  document.querySelector('#modal h4').innerHTML = this.title;
  document.querySelector('#modal figure>img').setAttribute('src', this.pic);
  document.querySelector('#modal figure>figcaption').innerHTML = this.title;
  document.querySelector('#modal dl>dd:nth-of-type(1)').innerHTML = this.year;
  document.querySelector('#modal dl>dd:nth-of-type(2)').innerHTML = this.program;
  document.querySelector('#modal dl>dd:nth-of-type(3)>a').setAttribute('href', this.url);
  document.querySelector('#modal dl>dd:nth-of-type(3)>a').innerHTML = this.url;
  document.querySelector('#modal dl>dd:nth-of-type(4)').innerHTML = this.text;
}
let myModal = [
  new modalFunc('title01', 'Ellipse-1', '2023', 'HTML, CSS', 'http://www.a.com', 'text01'),
  new modalFunc('title02', 'Ellipse-2', '2023', 'HTML, CSS', 'http://www.b.com', 'text02'),
  new modalFunc('title03', 'Ellipse-3', '2023', 'HTML, CSS, JS', 'http://www.c.com', 'text03'),
  new modalFunc('title04', 'Ellipse-4', '2023', 'HTML, CSS, JS', 'http://www.d.com', 'text04'),
  new modalFunc('title05', 'Ellipse-5', '2023', 'HTML, CSS, JS, REACT', 'http://www.e.com', 'text05'),
  new modalFunc('title06', 'Ellipse-6', '2023', 'HTML, CSS, JS, REACT', 'http://www.f.com', 'text06')
];

const portF = document.querySelectorAll('#box02 #all>figure');
const btnClose = document.querySelector('#modal .close');
portF.forEach((item, index) => {
  item.addEventListener('click', function(){
    document.querySelector('#modal').style.display = 'block';
    myModal[index].viewAction();
  });
})
btnClose.addEventListener('click', function(){
  document.querySelector('#modal').style.display = 'none';
})

// background click scroll
function backgroundClick(){
  $('#homeMain').on('click', function(){
    const aPos = $('#box01').offset().top;
    const headerHeight = $('header>div').innerHeight();
    $('html, body').stop().animate({scrollTop: aPos - headerHeight}, 800);
  })
}

// mobile skill bar
function skillAct(){
  $('.skillMb>ul>li').on('click', function(){
    let sPercent = $(this).children().text();
    $('.skillPercent>span').css('background-size', sPercent + ' ' + '100%');
  })
}

// top button
function top(){
  $('#top>a').on('click', function(){
    $('html, body').stop().animate({scrollTop: 0}, 500);
    return false;
  })
}