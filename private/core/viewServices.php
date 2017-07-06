<?php 

function viewService($file, $title_page, $description_page) {

	if ($title_page == '') {
		console_log('Warning [SEO]: title is empty');
		$title = '';
	}

	if ($description_page == '') {
		console_log('Warning [SEO]: description is empty');
		$description = '';
	}

	$file = pathinfo($file, PATHINFO_FILENAME);
    $view = './private/default/views/'.$file.'.php';

    if (file_exists($view)) {
    	include_once($view);
    } else {
    	die('view not exists');
    }
}