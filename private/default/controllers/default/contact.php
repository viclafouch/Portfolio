<?php 

	if (!empty($_POST)) {
		$captcha= $_POST['g-recaptcha-response'];
		$secretKey = "6LczzykUAAAAAE9R-TDyrTV0XoaOEIpHRaLsb5lN";
        $ip = $_SERVER['REMOTE_ADDR'];

        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
        $responseKeys = json_decode($response,true);

        if (intval($responseKeys["success"]) !== 1) {
        	$human = false;
        } else {
        	$human = true;
        }

        if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) { $email = true; }
        
		else { $email = false; }

		if ($email && $human) {
			$firstname = ucfirst(trim(htmlspecialchars($_POST['firstname'])));
			$lastname = ucfirst(trim(htmlspecialchars($_POST['lastname'])));
			$message = ucfirst(trim(htmlspecialchars($_POST['message'])));

			$to = "victor.dlf@outlook.fr";
			$from = $_POST['email'];
			$subject = "Prise de contact";
			$message = $message;

			$headers = "From: $from"; 
			$send = @mail($to, $subject, htmlspecialchars_decode($message), $headers, "-f " . $from);   

			if ($send) {
				echo "email envoyé";
			} else {
				echo "Une erreur est survenue";
			}
		}

	} else {
		$title_page = 'Contact | Victor de la Fouchardiere';
		$description_page = 'Prenez contact maintenant avec Victor de la Fouchardière, développeur et étudiant à l\'Ecole Européenne des Métiers de l\'Internet';

		viewService(__FILE__, $title_page, $description_page);
	}
