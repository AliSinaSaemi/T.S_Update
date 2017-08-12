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

// about page
var aboutText = {
  delay: 200,
  duration: 800,
  scale: 0.8
}

sr.reveal('.section-1-about', aboutText);
sr.reveal('.section-2-about', aboutText);
sr.reveal('.section-3-about', aboutText);

/*
      var hero = {
        origin   : "top",
        distance : "24px",
        duration : 1500,
        scale    : 1.05,
      }

      var intro = {
        origin   : "bottom",
        distance : "64px",
        duration : 900,
        delay    : 1500,
        scale    : 1,
      }

      var github = {
        origin   : "top",
        distance : "32px",
        duration : 600,
        delay    : 1800,
        scale    : 0,
      }

      var block = {
        reset: true,
        viewOffset: { top: 64 }
      }

      sr.reveal(".demo .block", block)
      sr.reveal(".hero", hero)
      sr.reveal(".intro", intro)
      sr.reveal(".hero .github", github)
      sr.reveal(".seq-1", block, 200)

      function addCommasToNum( num ){
        return num.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," )
      }    
*/