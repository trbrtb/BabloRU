$(document).ready(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 96) {
            $(".header, .header_top_inner, .header_bottom_inner, .header_nav, .header_link_tel, .header_link_address").addClass("header_scroll");
        } else {
            $(".header, .header_top_inner, .header_bottom_inner, .header_nav, .header_link_tel, .header_link_address").removeClass("header_scroll");
        }
    });

    $('a[href^="#"').on('click', function (e) {
        let href = $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop: $(href).offset().top - 48
        }, 500);
        e.preventDefault();
    });

});
