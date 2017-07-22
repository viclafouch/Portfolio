<?php include_once('private/default/views/layouts/header.php'); ?>

<section class="container container_portfolio">
	<header>
		<h2>Portfolio</h2>
		<p>Ce que je développe</p>
	</header>
	<div class="row wrap">
		<article class="work">
			<div class="col nowrap">
				<header class="header_work">
					<div class="overlay">
						<span data-popup-work="codepen"><i class="fa fa-link" aria-hidden="true"></i></span>
					</div>
					<img src="./public/assets/img/codepen-screen.png" alt="Codepen" title="" />
				</header>
				<footer class="footer_work">
					<h4>Codepen</h4>
					<p>Fronted</p>
				</footer>
			</div>
			<div class="popup_work" id="codepen">
				<div class="popup_overlay" data-close-popup></div>
				<div class="popup_container">
					<span class="close" data-close-popup><i class="fa fa-times" aria-hidden="true"></i></span>
					<div class="col nowrap">
						<h3>Codepen</h3>
						<div class="screen">
							<img src="./public/assets/img/codepen-screen.png" alt="Codepen" title="Codepen">
						</div>
						<div class="content col nowrap col-hori-center">
							<p>Toutes mes réalisations de front sur Codepen.</p>
							<a href="https://codepen.io/Viclafouch/" target="_blank" title="" class="button_default">Accéder au site</a>
						</div>
					</div>
				</div>
			</div>
		</article>
		<article class="work">
			<div class="col nowrap">
				<header class="header_work">
					<div class="overlay">
						<span data-popup-work="beparis"><i class="fa fa-link" aria-hidden="true"></i></span>
					</div>
					<img src="./public/assets/img/beparis-screen.png" alt="BeParis" title="" />
				</header>
				<footer class="footer_work">
					<h4>BeParis</h4>
					<p>Fronted</p>
				</footer>
			</div>
			<div class="popup_work" id="beparis">
				<div class="popup_overlay" data-close-popup></div>
				<div class="popup_container">
					<span class="close" data-close-popup><i class="fa fa-times" aria-hidden="true"></i></span>
					<div class="col nowrap">
						<h3>BeParis</h3>
						<div class="screen">
							<img src="./public/assets/img/beparis-screen.png" alt="BeParis" title="BeParis">
						</div>
						<div class="content col nowrap col-hori-center">
							<p>Premier site web développé avec différents étudiants de l'EEMI afin d'acquérir les premières bases du développement back et front d'un site web.</p>
							<a href="http://beparis.hol.es/" target="_blank" title="" class="button_default">Accéder au site</a>
						</div>
					</div>
				</div>
			</div>
		</article>
		<article class="work">
			<div class="col nowrap">
				<header class="header_work">
					<div class="overlay">
						<span data-popup-work="tutobwim"><i class="fa fa-link" aria-hidden="true"></i></span>
					</div>
					<img src="./public/assets/img/tutobwim-screen.png" alt="TutoBwim.fr" title="" />
				</header>
				<footer class="footer_work">
					<h4>TutoBwim.fr</h4>
					<p>Fronted</p>
				</footer>
			</div>
			<div class="popup_work" id="tutobwim">
				<div class="popup_overlay" data-close-popup></div>
				<div class="popup_container">
					<span class="close" data-close-popup><i class="fa fa-times" aria-hidden="true"></i></span>
					<div class="col nowrap">
						<h3>TutoBwim.fr</h3>
						<div class="screen">
							<img src="./public/assets/img/tutobwim-screen.png" alt="TutoBwim.fr" title="TutoBwim.fr">
						</div>
						<div class="content col nowrap col-hori-center">
							<p>Mon premier site web personnel développé via le CMS WordPress, petit blog qui me permet de partager des astuces informatiques à mes abonnés.</p>
							<a href="http://www.tutobwim.fr/" target="_blank" title="" class="button_default">Accéder au site</a>
						</div>
					</div>
				</div>
			</div>
		</article>
		<article class="work">
			<div class="col nowrap">
				<header class="header_work">
					<div class="overlay">
						<span data-popup-work="ficheandtricks"><i class="fa fa-link" aria-hidden="true"></i></span>
					</div>
					<img src="./public/assets/img/ficheandtricks-screen.png" alt="Fiche &amp; Tricks" title="" />
				</header>
				<footer class="footer_work">
					<h4>Fiche &amp; Tricks</h4>
					<p>Fronted</p>
				</footer>
			</div>
			<div class="popup_work" id="ficheandtricks">
				<div class="popup_overlay" data-close-popup></div>
				<div class="popup_container">
					<span class="close" data-close-popup><i class="fa fa-times" aria-hidden="true"></i></span>
					<div class="col nowrap">
						<h3>Fiche &amp; Tricks</h3>
						<div class="screen">
							<img src="./public/assets/img/ficheandtricks-screen.png" title="Fiche &amp; Tricks" alt="Fiche &amp; Tricks">
						</div>
						<div class="content col nowrap col-hori-center">
							<p>Site web développé (coté front/back) pour les experts Top Contributeur de Google  afin d'améliorer leur productivité et leur capacité de réponse sur les forums officiels Google. </p>
							<a href="http://www.vicandtips.fr/Fiche&Tricks/" target="_blank" title="" class="button_default">Accéder au site</a>
						</div>
					</div>
				</div>
			</div>
		</article>
	</div>
</section>

<?php include_once('private/default/views/layouts/footer.php'); ?>