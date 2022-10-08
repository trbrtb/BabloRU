$(document).ready(function () {
	$('.social_margin').click(function (event) {
		$('.modal,.modal_wrapper,.modal_header,.close_modal').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.close_modal').click(function (event) {
		$('.modal').removeClass('active');
		$('body').removeClass('lock');
	});
});