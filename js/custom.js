
// Backstretch full screen image slider

jQuery(document).ready(function($){
        var items = [
            { img: "images/background_images/Marcos_Novak_1920x1200.jpg", caption: "Artist: Marcos Novak" },
            { img: "images/background_images/Elings_Hall_front_1920x1200.jpg", caption: "Photo: Larry Zins" },
            { img: "images/background_images/Lance_Putnam_SPhase01_1920x1200.png", caption: "Artist: Lance Putnam" },
            { img: "images/background_images/Stoicheia-1_1920x1200.jpg", caption: "Artists: Jean Michel Crettaz, Myles Sciotto" },
            { img: "images/background_images/Tim_Wood_Becoming_light_1920x1200.jpg", caption: "Performer: Tim Wood. Photo: Weihao Qiu" },
            { img: "images/background_images/Hive_1920x1200.jpg", caption: "Artist: Solen Kiratly. Photo: Joseph Armario" },
            { img: "images/background_images/EOYS_2016_Mohit_Hingorani_1920x1200.jpg", caption: "Photo: Mohit Hingorani" },
            { img: "images/background_images/Jing_Yan_1920x1200.png", caption: "Artist: Jing Yan" },
            { img: "images/background_images/Liu_Lu_mat259_2016_1920x1200.png", caption: "Artist: Liu Lu" },
            { img: "images/background_images/Mohit_Hingorani_mat259_2014_1920x1200.png", caption: "Artist: Mohit Hingorani" },
        ];

        var options = {
            fade: 800,
            duration: 7000
        };

        var images = $.map(items, function(i) { return i.img; });
        var slideshow = $.backstretch(images,options);

        $(window).on("backstretch.show", function(e, instance) {
            var theCaption = items[instance.index].caption;
            $("#caption").text(theCaption);
            if ($(this).scrollTop() < 100) {
                $("#caption").fadeIn(800);
            }
        });
        $(window).on("backstretch.before", function(e, instance) {
            $("#caption").fadeOut(800);
        });
});

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

$('.popup-map').magnificPopup({
    type: 'iframe',
    disableOn: 700,
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    closeOnContentClick: true,
    fixedContentPos: false
});



