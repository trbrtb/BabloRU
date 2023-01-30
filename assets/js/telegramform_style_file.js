$('.telegram_form_file input[type=file]').on('change', function () {
    let filesNumber = this.files.length;

    if (filesNumber) {
        $(this).closest('.telegram_form_file').find('.telegram_file_text_1').html('Выбрано файлов: ' + filesNumber);
        $(".btn_del_telegram").removeClass("hide");
        $(".telegram_file_text_1").removeClass("hide");
        $(".telegram_file_text_2").addClass("hide");
    }

    $('.btn_del_telegram').click(function (event) {
        $(".btn_del_telegram").addClass("hide");
        $("#contact_form_input_file").val("");
        $(".telegram_file_text_1").addClass("hide");
        $(".telegram_file_text_2").removeClass("hide");
    });
});