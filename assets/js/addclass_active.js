$(document).ready(function () {

    $('.header_burger').click(function (event) {
        $('.header_burger,.header_nav, body').toggleClass('active');
    });

    $('.about_arrow').click(function (event) {
        $('.wrapper_about, .about_image, .about_text, .about_text_title, .about_text_subtitle, .about_arrow, .about_text_bg, .wrapper_accordion').toggleClass('active');
    });

});
