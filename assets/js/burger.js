$(document).ready(function () {
	$('.header_burger').click(function (event) {
		$('.header_burger,.header_menu,.logo').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.nav_link').click(function (event) {
		$('.header_burger,.header_menu,.logo').removeClass('active');
		$('body').removeClass('lock');
	});
});