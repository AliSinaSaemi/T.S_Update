/*=======================

     Sticky show
 
=======================*/

$(".navbar").sticky({
  topSpacing: 0
});

/*=======================

     Searchbox show
 
=======================*/

$(document).ready(function () {
  $(".search-btn").click(function () {
    $("#searchBox").toggleClass("search-show");
  });
});

/*=======================

     sidemedia show
 
=======================*/

$(document).ready(function () {
  $("#close_social_media").click(function () {
    $('.social-media-sidenav').addClass('closed_social_media');
  });
  $(".open_social_media").click(function () {
    $('.social-media-sidenav').removeClass('closed_social_media');
  });
});

/*=======================

      Sidenav show
 
=======================*/

function openNav() {
  document.getElementById("cssmenu").style.width = "100%";
  document.getElementById("cssmenu").style.opacity = "1";
}

function closeNav() {
  document.getElementById("cssmenu").style.width = "0";
  document.getElementById("cssmenu").style.opacity = "0";
}


/*=======================

    Scroll animation
 
=======================*/

window.sr = ScrollReveal();
// all * pages
var articleTitles = {
  origin: 'bottom',
  distance: '30px',
  delay: 200,
  scale: 0.8
}
sr.reveal('.article-title', articleTitles);
var underlineTitle = {
  delay: 500,
  scale: 0.8,
  origin: 'bottom',
  distance: '30px',
}
sr.reveal('.sub-underline-title', underlineTitle);

var footerContentRight = {
  delay: 200,
  duration: 1000,
  origin: 'right',
  distance: '30px',
}
sr.reveal('.footer-content-1', footerContentRight)

var footerContentCenter = {
  delay: 400,
  duration: 1000,
  origin: 'top',
  distance: '30px',
}
sr.reveal('.footer-content-2', footerContentCenter)

var footerContentleft = {
  delay: 200,
  duration: 1000,
  origin: 'left',
  distance: '30px',
}
sr.reveal('.footer-content-3', footerContentleft)

var footerContentCopyright = {
  delay: 300,
  duration: 1000,
  origin: 'bottom',
  distance: '30px',
}
sr.reveal('.footer-content-4', footerContentCopyright)

// main page
var bannerContent = {
  delay: 300,
  duration: 800,
  origin: 'bottom',
  distance: '20px',
}
sr.reveal('.banner-content', bannerContent);
var rotatingSlider = {
  delay: 1000,
  duration: 1000,
  origin: 'bottom',
  distance: '20px',
}
sr.reveal('.rotating-slider-list', rotatingSlider);
var rotatingSliderRightArrow = {
  delay: 700,
  duration: 800,
    origin: 'left',
  distance: '20px',
}
sr.reveal('.rm_next', rotatingSliderRightArrow);
var rotatingSliderLeftArrow = {
  delay: 700,
  duration: 800,
    origin: 'right',
  distance: '20px',
}
sr.reveal('.rm_prev', rotatingSliderLeftArrow);
var rotatingSliderText = {
  delay: 1500,
  duration: 800,
  origin: 'right',
  distance: '30px',
}
sr.reveal('.rotating-slider-text', rotatingSliderText);

// about page
var aboutText = {
  delay: 200,
  duration: 800,
  scale: 0.8
}

sr.reveal('.section-1-about', aboutText);
sr.reveal('.section-2-about', aboutText);
sr.reveal('.section-3-about', aboutText);

// gallary page
var gallaryGateRight = {
  delay: 900,
  duration: 500,
  origin: 'right',
  distance: '30px',
}
var gallaryGateCenter = {
  delay: 700,
  duration: 500,
}
var gallaryGateLeft = {
  delay: 900,
  duration: 500,
  origin: 'left',
  distance: '30px',
}
sr.reveal('.gallary-right', gallaryGateRight);
sr.reveal('.gallary-center', gallaryGateCenter);
sr.reveal('.gallary-left', gallaryGateLeft);
var gallaryContinue = {
  delay: 1000,
  duration: 500,
  origin: 'top',
  distance: '30px',
}
sr.reveal('.gallary-continue', gallaryContinue);
