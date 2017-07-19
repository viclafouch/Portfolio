// Your script here

// You can creat multiple files, gulp will concat them in good order :)

// Your code will minify in /min

// Barre de loader verticale

var popup = false,
menuopen = false,
i;
var burger = document.getElementById('menuburger'),
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

	var closePopup = document.querySelectorAll('[data-close-popup]');
	var dataWork = document.querySelectorAll('[data-popup-work]');

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

	document.body.onclick = function(e) {
		checkMenu(false);
	}


	burger.onclick = function(e) {
		e.stopPropagation();
		checkMenu(true);
	}
});

var human = false;

function recaptchaCallback() {
	var captcha = document.querySelector('.g-recaptcha');
	captcha.parentElement.classList.remove('novalide');
	captcha.parentElement.classList.add('valide');
	human = true;
};

document.addEventListener("DOMContentLoaded", function(event) {

	var li = navrow.querySelectorAll(':scope > *');
	li.forEach(function(element) {
		element.addEventListener('click', function() {
			for (var i = li.length - 1; i >= 0; i--) {
				li[i].classList.remove('active');
			}
			element.classList.add('active');
		});
	});

	/* Formulaire de contact */

	var firstname = false,
	lastname = false,
	email = false,
	message = false;

	var inputForm = document.querySelectorAll('.input_contact_form');

	inputForm.forEach(function(element) {
		element.addEventListener('focusin', function() {
			if (element.value == '') {
				element.parentElement.classList.add('novalide');
			}
		});
	});

	inputForm.forEach(function(element) {
		element.addEventListener('blur', function() {
			element.parentElement.classList.remove('novalide');
		});
	});

	inputForm.forEach(function(element) {
		element.addEventListener('keyup', function() {
			if (element.getAttribute('id') != 'email') {
				if (this.value == '') {
					this.parentElement.classList.remove('valide');
					this.parentElement.classList.add('novalide');

					if (this.getAttribute('id') == 'firstname') {
						firstname = false;
					}
					else if (this.getAttribute('id') == 'lastname') {
						lastname = false;
					}
					else if (this.getAttribute('id') == 'message') {
						message = false;
					}
				}

				else {
					this.parentElement.classList.remove('novalide');
					this.parentElement.classList.add('valide');

					if (this.getAttribute('id') == 'firstname') {
						firstname = true;
					}
					else if (this.getAttribute('id') == 'lastname') {
						lastname = true;
					}
					else if (this.getAttribute('id') == 'message') {
						message = true;
					}
				}
			}
			else {
				if (this.value.match( /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i ) ) {
	    			this.parentElement.classList.remove('novalide');
					this.parentElement.classList.add('valide');
	    			email = true;
				} else {
					this.parentElement.classList.remove('valide');
					this.parentElement.classList.add('novalide');
	    			email = false;
				}
			}
		});
	});

	var contactForm = document.getElementById('contact_form');
	var valide;

	if (contactForm) {
		contactForm.addEventListener('submit', function(event) {
			event.preventDefault();
			if (!firstname) {
				document.getElementById('firstname').parentElement.classList.add('novalide');
				valide = false;
			}
			if (!lastname) {
				document.getElementById('lastname').parentElement.classList.add('novalide');
				valide = false;
			}
			if (!email) {
				document.getElementById('email').parentElement.classList.add('novalide');
				valide = false;
			}
			if (!message) {
				document.getElementById('message').parentElement.classList.add('novalide');
				valide = false;
			}
			if (grecaptcha.getResponse().length == 0) {
			  	document.querySelector('.g-recaptcha').parentElement.classList.add('novalide');
			  	valide = human = false;
			}
			if (firstname && lastname && email && message && human) { valide = true; }

			if (!valide) { return false; }

			else {
				var http = new XMLHttpRequest();
				var url = this.getAttribute('action');
				var firstnameValue = document.getElementById('firstname').value;
				var lastnameValue = document.getElementById('lastname').value;
				var emailValue = document.getElementById('email').value;
				var messageValue = document.getElementById('message').value;
				var responseCaptcha = grecaptcha.getResponse();

				http.open("POST", url, true);

				http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

				http.onreadystatechange = function() {
				    if (http.readyState == 4 && http.status == 200) {
				        inputForm.forEach(function(element) {
				        	element.value = '';
				        	element.parentElement.classList.remove('valide');
				        });
				        grecaptcha.reset();
				        document.querySelector('.g-recaptcha').parentElement.classList.remove('valide');
				    }
				}
				http.send(encodeURI('firstname='+firstnameValue+'&lastname='+lastnameValue+'&email='+emailValue+'&message='+messageValue+'&g-recaptcha-response='+responseCaptcha));
			}

		});
	}
});