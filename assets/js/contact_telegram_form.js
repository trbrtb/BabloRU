(function ($) {
    $(".contact_form").submit(function (event) {
        event.preventDefault();

        // Сообщения формы
        let successSendText = "Сообщение успешно отправлено";
        let errorSendText = "Сообщение не отправлено, попробуйте еще раз";
        let requiredFieldsText = "Заполните поля с именем и телефоном";

        // Сохраняем в переменную класс с параграфом для вывода сообщений об отправке
        let message = $(this).find(".contact_form_message");

        let form = $("#" + $(this).attr("id"))[0];
        let fd = new FormData(form);
        $.ajax({
            // url: "/themes/rct/assets/php/send-message-to-telegram.php",
            url: "/assets/php/send-message-to-telegram.php",
            type: "POST",
            data: fd,
            processData: false,
            contentType: false,
            beforeSend: () => {
                $(".form_preloader").addClass("active");
            },
            success: function success(res) {
                $(".form_preloader").removeClass("active");
                $('#contact_form')[0].reset();
                $('.contact_choice_file_text').html('Прикрепить файл');
                $(".contact_choice_file_del").addClass("hide");

                let respond = $.parseJSON(res);

                if (respond === "SUCCESS") {
                    $(".form_hidden").addClass("active");
                    $(".contact_form_message_wrapper").addClass("active");
                    message.text(successSendText).css("color", "#000000");
                    setTimeout(() => {
                        $(".form_hidden").removeClass("active");
                        $(".contact_form_message_wrapper").removeClass("active");
                        message.text("");
                    }, 4000);
                } else if (respond === "NOTVALID") {
                    $(".form_hidden").addClass("active");
                    $(".contact_form_message_wrapper").addClass("active");
                    message.text(requiredFieldsText).css("color", "#000000");
                    setTimeout(() => {
                        $(".form_hidden").removeClass("active");
                        $(".contact_form_message_wrapper").removeClass("active");
                        message.text("");
                    }, 3000);
                } else {
                    $(".form_hidden").addClass("active");
                    $(".contact_form_message_wrapper").addClass("active");
                    message.text(errorSendText).css("color", "#000000");
                    setTimeout(() => {
                        $(".form_hidden").removeClass("active");
                        $(".contact_form_message_wrapper").removeClass("active");
                        message.text("");
                    }, 4000);
                }
            }
        });
    });
})(jQuery);