<?php include_once('/layouts/header.php'); ?>

<section class="container container_index">
	<div class="content_block">
		<div class="row_block" id="profil_row">
			<img src="./public/assets/imgComp/victor-de-la-fouchardiere.png" title="" alt="">
			<div class="heading_name_role">
				<h2>Victor de la Fouchardière</h2>
				<span>Google TC / Etudiant / Developpeur web</span>
			</div>
		</div>
		<hr>
		<div class="row_block" id="resum_row">
			<p class="resum">Developpeur web et étudiant depuis septembre 2015 à l'Ecole Européenne des Métiers de l'Internet, j'ai une vraie vocation pour la programmation web tout en ayant acquis des connaissances renforcées en marketing et en design.</p>
		</div>
		<hr>
		<div class="row_block" id="skills_row">
			<div class="row wrap row-verti-center">
				<div class="item">
					<div class="col col-hori-center nowrap">
						<?php include_once('./public/assets/imgComp/settings.svg'); ?>
						<span>Développement de A à Z</span>
						<p>Créer des sites web complets coté utilisateur et coté serveur</p>
					</div>
				</div>
				<div class="item">
					<div class="col col-hori-center nowrap">
						<?php include_once('./public/assets/imgComp/smartphone.svg'); ?>
						<span>Responsive design adapté</span>
						<p>Penser responsive quelque soit l'appareil (tablettes, desktop...).</p>
					</div>
				</div>
				<div class="item">
					<div class="col col-hori-center nowrap">
						<?php include_once('./public/assets/imgComp/checked.svg'); ?>
						<span>Code propre et soigné</span>
						<p>Programmer avec un code (HTML5 ; CSS3 ; PHP ; JS) propre et valide.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<?php include_once('/layouts/footer.php'); ?>