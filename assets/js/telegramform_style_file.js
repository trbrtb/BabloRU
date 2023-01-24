$('.contact_form_file_button input[type=file]').on('change', function () {
    let filesNumber = this.files.length;

    if (filesNumber) {
        $(this).closest('.contact_form_file_button').find('.contact_form_file_text_1').html('Выбрано файлов: ' + filesNumber);
        $(".btn_del").removeClass("hide");
        $(".contact_form_file_text_1").removeClass("hide");
        $(".contact_form_file_text_2").addClass("hide");
    }

    $('.btn_del').click(function (event) {
        $(".btn_del").addClass("hide");
        $("#contact_form_input_file").val("");
        $(".contact_form_file_text_1").addClass("hide");
        $(".contact_form_file_text_2").removeClass("hide");
    });
});