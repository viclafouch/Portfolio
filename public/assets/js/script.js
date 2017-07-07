// Your script here

// You can creat multiple files, gulp will concat them in good order :)

// Your code will minify in /min

// Barre de loader verticale
$(function() {
    $(window).scroll(
        function() {
            if ($(this).scrollTop() > 700) {
                $('.trait-actif').css('height', '33.3%');
                // $('#Google').animate({ opacity: 1}, 400);
            } else {
                $('.trait-actif').css('height', '0%');
            }
            if ($(this).scrollTop() > 1000) {
                $('.trait-actif').css('height', '66.6%').fadeIn('slow');
                // $('#Youtube').animate({ opacity: 1 }, 400);
            }
            if ($(this).scrollTop() > 1300) {
                $('.trait-actif').css('height', '100%').fadeIn('slow');
                // $('#Carrefour').animate({ opacity: 1 }, 400);
            }
        }
    );
});


$(function() {
    $(window).scroll(
        function() {
            if ($(this).scrollTop() > 300) {
                $('.creation').addClass('fadeIn');
            }
            if ($(this).scrollTop() > 300) {
                $('.validation').addClass('fadeIn');
            }
            if ($(this).scrollTop() > 300) {
                $('.responsive').addClass('fadeIn');
            }
        }
    );
});

$(document).ready(function() {
    var offset = 220;
    var duration = 300;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.haut').fadeIn(duration);
        } else {
            $('.haut').fadeOut(duration);
        }
    });
    $('.haut').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});


$(document).ready(function(){
   $('.menu').children().click(function () {
      $(".active").removeClass("active");
      $(this).addClass("active");
   });
});