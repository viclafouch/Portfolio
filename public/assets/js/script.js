// Your script here

// You can creat multiple files, gulp will concat them in good order :)

// Your code will minify in /min

// Barre de loader verticale

var popup = false;

var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	sURLVariables = sPageURL.split('&'),sParameterName,i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};

if (getUrlParameter('module') == 'default'){
	console.log('test');
	var actionUrl = getUrlParameter('action');
	console.log(actionUrl);
	$('[href="?module=default&action='+actionUrl+'"]').parent('li').addClass('active');
}


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

$(document).on('click', '#nav li', function() {
	$(this).attr('data-appened', 'true');
	console.log('active');
		$('#nav li').removeClass('active');
		$(this).addClass('active');
	});

document.addEventListener("turbolinks:load", function() {
})