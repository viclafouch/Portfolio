// Your script here

// You can creat multiple files, gulp will concat them in good order :)

// Your code will minify in /min

jQuery(document).ready(function(){
    jQuery(".notif").delay(8000).hide(500);
});

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
        });
});

// Barre de loader
$(function() {
    function calculPourcentageHauteur() {
        var hauteurDocument = $(document).height(); // Hauteur du document complet
        var hauteurFenetre = $(window).height(); // Hauteur de la fenêtre courante (viewport)
        var position = $(window).scrollTop(); // Position haute au moment du scroll
        var positionDernierEcran = hauteurDocument - hauteurFenetre; // Position haute du dernier écran visible
        var ratioHauteur = position / positionDernierEcran; // Ratio de la hauteur
        var pourcentageHauteur = Math.floor(ratioHauteur * 100); // Pourcentage de la hauteur
        return pourcentageHauteur;
    }

    // Barre de défilement horizontale en fonction du scroll
    function barreDefilement() {
        var cible = $("#barre-1 .progression");
        cible.css({
            "height": calculPourcentageHauteur() + "%"
        });
    }

    $(window).on("scroll", function() {
        barreDefilement();
    });
});



// Ajax
function createInstance() {

    var req = null;
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            req = new ActiveXObject("Msxml12.XMLHTTP");
        } catch (e) {
            try {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("XHR not created");
            }
        }
    }
    return req;
};

function MonAffichage(data, element) {
    element.innerHTML = data;
}

function MonAjax(element, path) {
    var req = createInstance();

    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            if (req.status == 200) {
                MonAffichage(req.responseText, element);
            } else {
                alert('Erreur Ajax :' + req.status + ' ' + req.statusText);
            }
        }
    };
    req.open("GET", path, true);
    req.send(null);

}

$('.menu').children().click(function() {
    $('html, body').animate({
        scrollTop: $("#storage").offset().top
    }, 1000);
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