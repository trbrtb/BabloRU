$(document).ready(function () { // Ждём загрузки страницы
    $(".image_modal").click(function () { // Событие клика на маленькое изображение
        var img = $(this); // Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $(".slider_wrapper").append("<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
            "<div class='popup_bg'></div>" + // Блок, который будет служить фоном затемненным
            "<img src='" + src + "' class='popup_img' />" + // Само увеличенное фото
            "</div>");
        $(".popup").fadeIn(200); // Медленно выводим изображение
        $(".popup_img, .popup_bg").click(function () { // Событие клика на затемненный фон	   
            $(".popup").fadeOut(200); // Медленно убираем всплывающее окн	
            setTimeout(function () { // Выставляем таймер
                $(".popup").remove(); // Удаляем разметку всплывающего окна
            }, 200);
        });
    });
});