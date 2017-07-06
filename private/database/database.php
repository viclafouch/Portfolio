<?php 

    /* Set TRUE if you're using a database */
    $activeDATA = false;

    if ($activeDATA) {
        try {
            $file = pathinfo(__FILE__, PATHINFO_FILENAME);
            $folder = dirname(__FILE__);

            /*---------- INFO DATABASE ----------*/
            
            $host = '';
            $port = '3306';
            $db_name = '';

            $username = '';
            $password = '';

            /*---------- ----------*/
            
            $dns = 'mysql:host='.$host.';port='.$port.';dbname='.$db_name;

            $settings = array (PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
                                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);

            $connection = new PDO ($dns, $username, $password, $settings);
        }
        catch (Exception $e) {
            $error = $e -> getMessage();
            die("Problem found in ".$folder." \ [".$file.".php] : ".$error);
        } finally {
            $file = $folder = null;
        }
    }