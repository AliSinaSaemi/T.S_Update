$(".navbar").sticky({topSpacing: 0});

$(document).ready(function () {
  $(".search-btn").click(function () {
    $("#searchBox").toggleClass("search-show");
  });
});

$(document).ready(function () {
  $("#close_social_media").click(function () {
    $('.social-media-sidenav').addClass('closed_social_media');
  });
  $(".open_social_media").click(function () {
    $('.social-media-sidenav').removeClass('closed_social_media');
  });
});