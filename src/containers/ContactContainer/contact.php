<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json");

    $response_array['success'] = false;
    $headers = apache_request_headers();

    function isHuman($value) {

        $ip = $_SERVER['REMOTE_ADDR'];
        $secretKey = "6LegHVAUAAAAAHItNCsL62nG6d5gzS_Ab4piRpuz";
        $arrContextOptions=array(
            "ssl" => array(
                "verify_peer"=> false,
                "verify_peer_name"=> false,
            ),
        );

        $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$value."&remoteip=".$ip, false, stream_context_create($arrContextOptions));

        $responseKeys = json_decode($response,true);

        return intval($responseKeys["success"]) === 1;
    }

    do {

        if (empty($_POST) && !array_key_exists('HTTP_TOKEN', $headers)) {
            break;
        }

        if (!isset($_POST['firstname'], $_POST['lastname'], $_POST['email'], $_POST['message'], $_POST['captcha'])) {
            break;
        }

        if (!isHuman($_POST['captcha'])) {
            break;
        }

        if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
            break;
        }

        $firstname = ucfirst(trim(htmlspecialchars($_POST['firstname'])));
        $lastname = ucfirst(trim(htmlspecialchars($_POST['lastname'])));
        $message = ucfirst(trim(htmlspecialchars($_POST['message'])));

        $to = "victor.delafouchardiere@eemi.com";
        $from = $_POST['email'];
        $subject = "Contact Portfolio par ".$firstname." ".$lastname;
        $message = $message;
        $headers = "From: $from";

        $send = @mail($to, $subject, htmlspecialchars_decode($message), $headers, "-f " . $from);

        if ($send) {
            $response_array['success'] = true;
            echo json_encode($response_array);
            return;
        } else {
            break;
        }

    } while (0);

    $response_array["code"] = 'INVALIDE_METHOD';
    $response_array["message"] = 'Méthode non valide';
    echo json_encode($response_array);
