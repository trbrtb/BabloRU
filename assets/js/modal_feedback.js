$(document).ready(function () {
	$('.open_modal_feedback').click(function (event) {
		$('.modal_feedback').toggleClass('active');
	});
});

$(document).ready(function () {
	$('.close_modal_feedback').click(function (event) {
		$('.modal_feedback').removeClass('active');
	});
});
