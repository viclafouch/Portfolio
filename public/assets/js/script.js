// Your script here

// You can creat multiple files, gulp will concat them in good order :)

// Your code will minify in /min

// Barre de loader verticale

$(document).on('click', '.popup_overlay', function(){
    if (popup) {
        $('.popup').removeClass('active');
    }
});

$(document).on('click', '[data-popup-work]', function(){
    $('.popup').addClass('active');
     popup = true;
});