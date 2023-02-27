$(document).ready(function () { // Ждём загрузки страницы
    $(".modal_img_work").click(function () { // Событие клика на маленькое изображение
        var img = $(this); // Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("body").append("<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
            "<div class='popup_bg'></div>" + // Блок, который будет служить фоном затемненным
            "<img src='" + src + "' class='popup_img' />" + // Само увеличенное фото
            "</div>");
        $('body').addClass('active');
        $(".popup").fadeIn(200); // Медленно выводим изображение
        $(".popup_img, .popup_bg").click(function () { // Событие клика на затемненный фон	   
            $(".popup").fadeOut(200); // Медленно убираем всплывающее окн	
            setTimeout(function () { // Выставляем таймер
                $(".popup").remove(); // Удаляем разметку всплывающего окна
            }, 200);
            $('body').removeClass('active');
        });
    });


    // Загрузка яндекс карты
    $(".open_modal_map").click(function () {

        $(".wrapper_contacts").append("<div class='modal_map'>" +
            "<div class='close_modal_map'></div>" +
            "<iframe class='modal_map_api' src='https://yandex.ru/map-widget/v1/?um=constructor%3A841bd4e63ac08566410088f46486e4b0836964716a381337a3bcf530d069fc33&amp;source=constructor' frameborder='0'></iframe>" +
            "</div>");

        $('body').addClass('active');

        $(".close_modal_map").click(function () {
            $(".modal_map").fadeOut(200);
            setTimeout(function () {
                $(".modal_map").remove();
            }, 200);
            $('body').removeClass('active');
        });

    });

});
