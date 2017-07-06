<?php 

/* Call view services */
include_once('core/viewServices.php');

if (!isset($_GET['module'])) { $module = DEFAULT_MODULE; } 
else { $module = $_GET['module']; }
if (!isset($_GET['action'])) { $action = DEFAULT_ACTION; } 
else { $action = $_GET['action']; }

$url = "./private/default/controllers/" . $module . "/" . $action . ".php";
if (file_exists($url)) {
	include_once($url);
} else {
	die('Page not found');
}
