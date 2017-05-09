

// Shrink top header on scroll
$(document).on("scroll", function () {
   if ($(document).scrollTop() > 100) {
       $("nav").addClass("shrink");
   } else {
       $("nav").removeClass("shrink");
   }
});

// Smooth Scroll
$(function() {
   $('.scroll-to a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
            $('html, body').animate({
               scrollTop: target.offset().top - 70
               }, 1500, 'easeInOutExpo');
            return false;
         }
      }
   });
});

$(function() {
   $('a#scrollDown').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
            $('html, body').animate({
               scrollTop: target.offset().top - 70
               }, 1500, 'easeInOutExpo');
            return false;
         }
      }
   });
});

/*
 * Display scroll to top arrow when you scroll down,
 * and make sure dropdown menu is closed.
 */

$(window).scroll(function() {
   if ($(this).scrollTop() > 100) {
      $('#scrollToTop').fadeIn(900);
      $('.dropdown.yamm-fw.open').removeClass('open');
   } else {
      $('#scrollToTop').fadeOut(900);
   }
});

$(window).scroll(function() {
   if ($(this).scrollTop() > 300) {
      $('ul.sidebar_nav').addClass('sidebar_nav_fixed');
   } else {
      $('ul.sidebar_nav').removeClass('sidebar_nav_fixed');
   }
});

$('#scrollToTop').click(function() {
   $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
      event.preventDefault();
});

$(window).scroll(function() {
   if ($(this).scrollTop() < 100) {
      $('#scrollDown').fadeIn(900);
   } else {
      $('#scrollDown').fadeOut(900);
   }
});

$('.sidebar_nav a').hover(function(){
    $('i', this).addClass('hover');
},
function(){
    $('i', this).removeClass('hover');
});

$('.popup-map').magnificPopup({
    type: 'iframe',
    disableOn: 700,
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    closeOnContentClick: true,
    fixedContentPos: false
});




