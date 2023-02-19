$(document).ready(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 96) {
            $(".header, .header_bottom_inner, .header_nav, .header_link_tel, .header_link_address").addClass("active_scroll");
        } else {
            $(".header, .header_bottom_inner, .header_nav, .header_link_tel, .header_link_address").removeClass("active_scroll");
        }
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $(".bottom_top").addClass("active");
        } else {
            $(".bottom_top").removeClass("active");
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
