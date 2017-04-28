
// Add background color to open accordion panel
$(".panel-collapse").on("show.bs.collapse", function() {
   $(this).parent('.panel-default').addClass('panel-heading_2');
});
$(".panel-collapse").on("hide.bs.collapse", function() {
   $(this).parent().removeClass('panel-heading_2');
});

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


/* Hide the MAT title that scrolls in after you scroll down */

$(window).scroll(function() {
   if ($(this).scrollTop() > 100) {
       $('#title_container').fadeOut();
       $('#caption').fadeOut();
   } else {
       $('#title_container').fadeIn();
       $('#caption').fadeIn();
   }
});


/* Display scroll to top arrow when you scroll down */

$(window).scroll(function() {
   if ($(this).scrollTop() > 100) {
      $('#scrollToTop').fadeIn(900);
   } else {
      $('#scrollToTop').fadeOut(900);
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


