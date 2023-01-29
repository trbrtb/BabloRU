let stars = jQuery('.ec-rating').find('.ec-rating-stars>span');
stars.on('touchend click', function () {
   let starDesc = jQuery(this).data('description');
   jQuery(this).parent().parent().find('.ec-rating-description').html(starDesc).data('old-text', starDesc);
   jQuery(this).parent().children().removeClass('active active2 active-disabled');
   jQuery(this).prevAll().addClass('active');
   jQuery(this).addClass('active');
   // save vote
   let storageId = jQuery(this).closest('.ec-rating').data('storage-id');
   jQuery('#' + storageId).val(jQuery(this).data('rating'));
});
stars.hover(
   // hover in
   function () {
      let descEl = jQuery(this).parent().parent().find('.ec-rating-description');

      descEl.data('old-text', descEl.html());
      descEl.html(jQuery(this).data('description'));
      jQuery(this).addClass('active2').removeClass('active-disabled');
      jQuery(this).prevAll().addClass('active2').removeClass('active-disabled');
      jQuery(this).nextAll().removeClass('active2').addClass('active-disabled');
   },
   // hover out
   function () {
      let descEl = jQuery(this).parent().parent().find('.ec-rating-description');
      descEl.html(descEl.data('old-text'));
      jQuery(this).parent().children().removeClass('active2 active-disabled');
   }
);


// Выбор файла

$('.reviews_form_file input[type=file]').on('change', function () {
   let filesNumber = this.files.length;

   if (filesNumber) {
      $(this).closest('.reviews_form_file').find('.reviews_file_text_1').html('Выбрано файлов: ' + filesNumber);
      $(".btn_del_reviews").removeClass("hide");
      $(".reviews_file_text_1").removeClass("hide");
      $(".reviews_file_text_2").addClass("hide");
   }

   $('.btn_del_reviews').click(function (event) {
      $(".btn_del_reviews").addClass("hide");
      $("#file-1").val("");
      $(".reviews_file_text_1").addClass("hide");
      $(".reviews_file_text_2").removeClass("hide");
   });
});

function sendReviews(form) {
   $('#reviews_form')[0].reset();
   $("#file-1").val("");
   $(".btn_del_reviews").addClass("hide");
   $(".reviews_file_text_1").addClass("hide");
   $(".reviews_file_text_2").removeClass("hide");
   $('#reviews_list').load(document.URL + ' #reviews_list');
}

function noSendReviews(form) { }


$(document).ready(function () { // Ждём загрузки страницы
   $(".image_modal_reviews").click(function () { // Событие клика на маленькое изображение
       var img = $(this); // Получаем изображение, на которое кликнули
       var src = img.attr('src'); // Достаем из этого изображения путь до картинки
       $(".reviews").append("<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
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