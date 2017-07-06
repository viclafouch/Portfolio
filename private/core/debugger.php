<?php 
	
	/* Turn on all error reporting */
	error_reporting(E_ALL);

	/* Print out error to the browsers console */
	function console_log($data) {
	  echo '<script>';
	  echo 'console.log('.json_encode($data).')';
	  echo '</script>';
	}