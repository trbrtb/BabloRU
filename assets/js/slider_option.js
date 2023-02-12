$(document).ready(function () {
    $('.slider').slick({
        arrows: true, //Показ стрелок
        dots: true, //Показ булитов
        slidesToShow: 3,
        slidesToScroll: 1, // По сколько слайдев пролистывать
        speed: 700,
        easing: 'linear', // Тип анимации
        infinite: true, // Зацикливание
        initialSlide: 0, // Стартовый слайд
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: true, //Пауза при клике мышки на слайд
        pauseOnHover: true, //Пауза при наведении мышки на слайд
        pauseOnDotsHover: true, //Пауза при наведении мышки на точки
        draggable: true, //Перемещать слайды мышкой на ПК
        swipe: true, //Перемещать слайды пальцем на мобильных устройствах
        touchThreshold: 10, //Чувствительность перемещения слайда
        touchMove: false, //Драг слайда
        waitForAnimate: false, //Быстрая смена слайда при клике на стрелку
        centerMode: false, //Активный слайд по центру
        variableWidth: false, //Автомотическая ширина слайдов
        rows: 1, //Ряды слайда
        slidesPerRow: 1, //Колличество слайдев в ряду
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
        			},
            {
                breakpoint: 769,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    autoplay: false,
                    touchMove: true,
                    waitForAnimate: true,
                }
        			},
            {
                breakpoint: 426,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    autoplay: false,
                }
        			},
        		],
        //        mobileFirst: false, // Смена min-withs/max-withs
    });
    $('.slider').slick('setPosition');
});
