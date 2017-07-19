<?php 
	
	/* Turn on all error reporting */
	error_reporting(0);
	@ini_set('display_errors', 0);

	/* Print out error to the browsers console */
	function console_log($data) {
	  echo '<script>';
	  echo 'console.log('.json_encode($data).')';
	  echo '</script>';
	}