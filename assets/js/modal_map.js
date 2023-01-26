$(document).ready(function () {
	$('.map_bg, .img_load').click(function (event) {
		$('.modal_map_api').toggleClass('active');
	});
});

$(document).ready(function () {
	$('.close_modal_map_api, .modal_map_api').click(function (event) {
		$('.modal_map_api').removeClass('active');
	});
});
