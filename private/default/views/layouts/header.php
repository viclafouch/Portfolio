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
 		<meta name="robots" content="">
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

   		<link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">
		
		<!--====  Custom  ====-->
   		<link rel="stylesheet" type="text/css" href="public/assets/css/styles.min.css">

		<!--====  Favicon  ====-->
   		<link rel="icon" type="image/png" href=""/>
   		<link rel="shortcut icon" type="image/x-icon" href="" />
		<link rel="apple-touch-icon" href="" />
		<link rel="apple-touch-icon" sizes="72x72" href="" />
		<link rel="apple-touch-icon" sizes="114x114" href="" />

		<!--====  Scripts  ====-->
		<script defer src="public/lib/jquery/jquery.min.js" type="text/javascript"></script>
		<script defer src="public/assets/js/min/script.min.js" type="text/javascript"></script>

		<!--====  Turbolinks  ====-->
		<script defer src="public/lib/turbolinks/turbolinks.min.js"></script>
		<meta name="turbolinks-cache-control" content="no-cache">
	</head>
	<body>
		<header id="header" data-turbolinks-permanent>
			<div class="container row row-hori-between nowrap">
				<div class="heading_contact">
					<a href="#"><span><i class="fa fa-envelope-o" aria-hidden="true"></i> victor.dlf@outlook.fr</span></a>
					<a href="#"><span><i class="fa fa-phone" aria-hidden="true"></i> 06.26.92.26.35</span></a>
					<a href="#"><span><i class="fa fa-skype" aria-hidden="true"></i> viclafouch</span></a>
				</div>
				<div class="heading_social">
					<a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
					<a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
					<a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
					<a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
					<a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
				</div>
			</div>
		</header>
		<nav id="nav" data-turbolinks-permanent>
			<div class="container">
				<ul class="row row-hori-around wrap">
					<li><a href="./" title="">Accueil</a></li>
					<li><a href="?module=default&action=formations" title="">Formations</a></li>
					<li><a href="?module=default&action=productions" title="">Portfolio</a></li>
					<li><a href="?module=default&action=competences" title="">Compétences</a></li>
					<li><a href="http://www.eemi.com/" data-turbolinks="false" target="_blank" title="">L'Ecole</a></li>
					<li><a href="#" title="">Contact</a></li>
				</ul>
			</div>
		</nav>
		<div id="subheading" data-turbolinks-permanent>
			<div class="container col col-verti-center col-hori-center nowrap">
				<h2>Besoin d'un développeur web ?</h2>
				<p>Disponible pour vous aider dans le développement de votre site web, je vous invite à regarder ci-dessous l'ensemble de mes références pour mieux connaitre mon profil.</p>
				<a class="button_default" target="_blank" href="CV-Victor_de_la_Fouchardière.pdf" title="">Télécharger / Imprimer le CV</a>
			</div>
		</div>
		<main class="container">