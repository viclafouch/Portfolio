// Your script here

// You can creat multiple files, gulp will concat them in good order :)

// Your code will minify in /min

// Barre de loader verticale

var popup = false,
menuopen = false,
i;
const burger = document.getElementById('menuburger'),
navrow = document.getElementById('navrow'),
url = window.location.href.split('/'),
pageUrl = url[url.length - 1],
itemMenu = document.querySelectorAll("a.item-href");

for (i = 0; i < itemMenu.length; ++i) {
  	if (itemMenu[i].getAttribute('href') == '/'+pageUrl) {
  		itemMenu[i].parentElement.classList.add('active');
  	}
}

document.addEventListener("turbolinks:load", function() {

	const closePopup = document.querySelectorAll('[data-close-popup]');
	const dataWork = document.querySelectorAll('[data-popup-work]');

	closePopup.forEach(function(element) {
	 	element.addEventListener('click', function () {
	        if (popup) {
	        	var article = document.getElementsByClassName('popup_work active');
	        	article[0].classList.remove('active');
	        	popup = false;
	        }
	    });
	});

	dataWork.forEach(function(element) {
		element.addEventListener('click', function() {
			let id = this.getAttribute('data-popup-work');
			document.getElementById(id).classList.add('active');
			popup = true;
		});
	});

	document.body.onclick = function(e) {
		checkMenu(false);
	}


	burger.onclick = function(e) {
		e.stopPropagation();
		checkMenu(true);
	}

});



$(document).on('click', '#nav li', function() {
	$(this).attr('data-appened', 'true');
	$('#nav li').removeClass('active');
	$(this).addClass('active');
});

/* Formulaire de contact */

var firstname = false,
lastname = false,
email = false,
message = false;

$(document).on('focusin', '.input_contact_form', function(){
	if ($(this).val() == '') {
		$(this).parent('div').addClass('novalide');
	}
});

$(document).on('focusout', '.input_contact_form', function(){
	$('.field_label div').removeClass('novalide');
});

$(document).on('keyup', '#firstname, #lastname, #message', function() {
	const btn = $(this);
	if (btn.val() == '') {
		btn.parent('div').removeClass('valide').addClass('novalide');
		if (btn.attr('id') == 'firstname') {
			firstname = false;
		} 
		else if (btn.attr('id') == 'lastname') {
			lastname = false;
		} else {
			message = false;
		}
	} else {
		btn.parent('div').removeClass('novalide').addClass('valide');
		if (btn.attr('id') == 'firstname') {
			firstname = true;
		} 
		else if (btn.attr('id') == 'lastname') {
			lastname = true;
		} else {
			message = true;
		}
	}
});

$(document).on('keyup', '#email', function() {
    var user_input = $(this).val();
    if (user_input.match( /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i ) ){
    	$(this).parent('div').removeClass('novalide').addClass('valide');
    	email = true;
	}
    else {
    	$(this).parent('div').removeClass('valide').addClass('novalide');
    	email = false;
    }
});

function recaptchaCallback() {
	 $('.g-recaptcha').parent('div').removeClass('novalide').addClass('valide');
};

$(document).on('submit', '#contact_form', function(event) {
	if (!firstname) {
		$('#firstname').parent('div').addClass('novalide');
	}
	if(!lastname) {
		$('#lastname').parent('div').addClass('novalide');
	}
	if (!email) {
		$('#email').parent('div').addClass('novalide');
	}
	if (!message) {
		$('#message').parent('div').addClass('novalide');
	}
	if(grecaptcha.getResponse().length == 0){
	   $('.g-recaptcha').parent('div').addClass('novalide');
	}
	$.ajax({
		type: $(this).attr('method'),
		data: $(this).serialize(),
		url : $(this).attr('action'),
		success : function(data) {
			console.log(data);
		}
	});
	event.preventDefault();
	return false;
});


function checkMenu(params) {
	if (!navrow.classList.contains('active') && !menuopen) {
		if (params) {
			navrow.classList.add('active');
			burger.classList.add('menu-open');
			menuopen = true;
		}
	} else {
		navrow.classList.remove('active');
		burger.classList.remove('menu-open');
		menuopen = false;
	}
};

