<!DOCTYPE html>
<html lang="fr">
	<head>
		<title><?= $title; ?></title>

		<!--====  LIVERELOAD  ====-->
		<!-- YOU NEED LIVERELOAD APPLICATION ON YOUR COMPUTER -->
		<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

   		<!--====  Meta  ====-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
 		<meta name="description" content="<?= $description; ?>" />
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="theme-color" content="">
		<meta name="msapplication-navbutton-color" content="">
		<meta name="apple-mobile-web-app-capable" content="">
		<meta name="apple-mobile-web-app-status-bar-style" content="">

		<meta name="twitter:card" content="" />
		<meta name="twitter:site" content="" />
		<meta name="twitter:creator" content="" />

		<meta property="og:type"        content="" />
		<meta property="og:title"       content="" />
		<meta property="og:description" content="" />
		<meta property="og:url"         content="" />
		<meta property="og:site_name"   content="" />
		<meta property="og:image"       content="" />

		<meta property="fb:app_id" content="" />

   		<!--====  Lib  ====-->
   		<link rel="stylesheet" type="text/css" href="public/lib/animate/animate.min.css">

		<link href="https://fonts.googleapis.com/css?family=ABeeZee|Karma" rel="stylesheet">

		<!--====  Custom  ====-->
   		<link rel="stylesheet" type="text/css" href="public/assets/css/styles.min.css">

		<!--====  Favicon  ====-->
   		<link rel="icon" type="image/png" href="favicon.png"/>
   		<link rel="shortcut icon" type="image/x-icon" href="favicon-16x16.png" />
		<link rel="apple-touch-icon" href="icon-iphone.png" />
		<link rel="apple-touch-icon" sizes="72x72" href="icon-ipad.png" />
		<link rel="apple-touch-icon" sizes="114x114" href="icon-retina.png" />

		<!--====  Scripts  ====-->
		<script defer src="public/lib/jquery/jquery.min.js" type="text/javascript"></script>
		<script src='https://www.google.com/recaptcha/api.js'></script>
		<script defer src="public/assets/js/min/script.min.js" type="text/javascript"></script>

		<!--====  Turbolinks  ====-->
		<script defer src="public/lib/turbolinks/turbolinks.min.js"></script>
		<meta name="turbolinks-cache-control" content="no-cache">
	</head>
	<body>
		<header id="header" data-turbolinks-permanent>
			<div class="container row row-hori-between nowrap">
				<div class="heading_contact">
					<a href="mailto:victor.dlf@outlook.fr""><span><i class="fa fa-envelope-o" aria-hidden="true"></i> victor.dlf@outlook.fr</span></a>
					<a href="skype:victor.dlf?add"><span><i class="fa fa-skype" aria-hidden="true"></i> viclafouch</span></a>
				</div>
				<div class="heading_social">
					<a href="https://www.linkedin.com/in/victordelafouchardiere/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
					<a href="https://codepen.io/Viclafouch/" target="_blank"><i class="fa fa-codepen" aria-hidden="true"></i></i></a>
					<a href="https://topcontributor.withgoogle.com/profile/victor-de-la-fouchardiere-e5fded" target="_blank"><i class="fa fa-google" aria-hidden="true"></i></a>
					<a href="https://github.com/viclafouch" target="_blank"><i class="fa fa-git" aria-hidden="true"></i></i></a>
					<a href="https://twitter.com/VicAndTips" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
				</div>
			</div>
		</header>
		<nav id="nav" data-turbolinks-permanent>
			<div class="container">
				<div class="menuburger"><span></span></div>
				<ul class="navrow">
					<li><a href="./" title="">Accueil</a></li>
					<li><a href="?module=default&action=formations" title="">Formations</a></li>
					<li><a href="?module=default&action=productions" title="">Portfolio</a></li>
					<li><a href="?module=default&action=competences" title="">Compétences</a></li>
					<li><a href="?module=default&action=contact" data-turbolinks="false" title="">Contact</a></li>
				</ul>
			</div>
		</nav>
		<div id="subheading" data-turbolinks-permanent>
			<div class="container col col-verti-center col-hori-center nowrap">
				<img class="logo" src="./public/assets/img/logo.png" alt="">
				<h1>Besoin d'un développeur web ?</h1>
				<p>Disponible pour vous aider dans le développement de votre site web, je vous invite à regarder ci-dessous l'ensemble de mes références pour mieux connaitre mon profil.</p>
				<a class="button_default" target="_blank" download href="CV-Victor_de_la_Fouchardiere" title=""><i class="fa fa-download" aria-hidden="true"></i> Télécharger/Imprimer le CV</a>
			</div>
		</div>
		<main class="container">