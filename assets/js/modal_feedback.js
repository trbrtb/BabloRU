$(document).ready(function () {
	$('.open_modal').click(function (event) {
		$('.modal').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.close_modal').click(function (event) {
		$('.modal').removeClass('active');
		$('body').removeClass('lock');
	});
});