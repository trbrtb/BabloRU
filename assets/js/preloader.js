$(window).on('load', function () {
    var $preloader = $('.preloader'),
        $loader = $preloader.find('.wrapper_preloader');
    $loader.fadeOut();
    $preloader.delay(250).fadeOut(200);
});
