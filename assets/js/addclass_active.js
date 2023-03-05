$(document).ready(function () {

    $('.header_burger').click(function (event) {
        $('.header_burger,.header_nav, body').toggleClass('active');
    });

    $('.about_arrow').click(function (event) {
        $('.about, .wrapper_about, .about_image, .about_text, .about_text_title, .about_text_subtitle, .about_arrow, .about_text_bg, .wrapper_accordion').toggleClass('active');
    });

    $('.open_modal_feedback, .close_contact_feedback').click(function (event) {
        $('.contact_feedback, body').toggleClass('active');
    });

    $('.open_reviews, .btn_show_reviews').click(function (event) {
        $('.reviews, .reviews_random, .btn_add_reviews, .btn_show_reviews, .reviews_list').addClass('active');
    });

    $('.btn_add_reviews, .btn_close_reviews').click(function (event) {
        $('.reviews_form, .btn_close_reviews, body').toggleClass('active');
    });

});
