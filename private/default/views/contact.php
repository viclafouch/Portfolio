<?php include_once('/layouts/header.php'); ?>
<section class="container container_contact">
	<header>
		<h2>Contact</h2>
		<p>M'envoyer un message</p>
	</header>
	<div class="content_block">
		<form action="/contact" method="POST" class="col nowrap" id="contact_form">
			<label class="field_label col nowrap" for="firstname">
				<span>Prénom</span>
				<div class="row nowrap">
					<span class="ico"><i class="fa fa-user" aria-hidden="true"></i></span>
					<input spellcheck="false" id="firstname" required="required" class="input_contact_form" type="text" name="firstname" value="">
				</div>
			</label>
			<label class="field_label col nowrap" for="lastname">
				<span>Nom</span>
				<div class="row nowrap">
					<span class="ico"><i class="fa fa-user" aria-hidden="true"></i></span>
					<input spellcheck="false" id="lastname" required="required" class="input_contact_form" type="text" name="lastname" value="">
				</div>
			</label>
			<label class="field_label col nowrap" for="email">
				<span>Email</span>
				<div class="row nowrap">
					<span class="ico"><i class="fa fa-envelope" aria-hidden="true"></i></span>
					<input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" spellcheck="false" id="email" class="input_contact_form" required="required" type="email" name="email" value="">
				</div>
			</label>
			<label class="field_label col nowrap" for="message">
				<span>Votre message</span>
				<div class="row nowrap">
					<span class="ico"><i class="fa fa-pencil-square" aria-hidden="true"></i></span>
					<textarea rows="10" name="message" id="message" required="required" class="input_contact_form" spellcheck="false" autocomplete="off"></textarea>
				</div>
			</label>
			<label class="field_label col nowrap" data-captcha>
				<span>Sécurité</span>
				<div class="row nowrap row-verti-center">
					<span class="ico"><i class="fa fa-shield" aria-hidden="true"></i></span>
					<div class="g-recaptcha" data-callback="recaptchaCallback"  data-sitekey="6LdI-SgUAAAAAAWcm8waKfihXSM710e-reVZk_-9"></div>
				</div>
			</label>
			<button type="submit">Envoyer</button>
		</form>
	</div>
</section>
<?php include_once('/layouts/footer.php'); ?>
