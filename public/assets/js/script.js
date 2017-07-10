// Your script here

// You can creat multiple files, gulp will concat them in good order :)

// Your code will minify in /min

// Barre de loader verticale

var popup = false;

$(document).on('click', '.popup_overlay, [data-close-popup]', function(){
    console.log('test');
    if (popup) {
        $('.popup_work').removeClass('active');
        popup = false;
    }
});

$(document).on('click', '[data-popup-work]', function(){
    let id = $(this).data('popup-work');
    $('#'+id).addClass('active');
    popup = true;
});