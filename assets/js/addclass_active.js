$(document).ready(function () {

    $('.header_burger').click(function (event) {
        $('.header_burger,.header_nav, body').toggleClass('active');
    });

    $('.about_front_arrow').click(function (event) {
        $('.about_front_arrow').toggleClass('active');
    });

});

//$(document).ready(function () {
//	$('.nav_link').click(function (event) {
//		$('.header_burger,.header_nav').removeClass('active');
//	});
//});
