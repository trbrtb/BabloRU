jQuery(document).ready(function ($) {
	$(window).on('load', function () {
		var $preloader = $('.preloader'),
			$loader = $preloader.find('.wrapper_preloader');
		$loader.fadeOut();
		$preloader.delay(25).fadeOut(200);
	});
});