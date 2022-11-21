$(document).ready(function () {
	$('.modal_feedback').click(function (event) {
		$('.modal_feedback').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.close_modal_feedback').click(function (event) {
		$('.modal_feedback').removeClass('active');
		$('body').removeClass('lock');
	});
});
