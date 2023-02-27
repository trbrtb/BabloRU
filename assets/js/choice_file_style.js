$('.contact_choice_file_button input[type=file]').on('change', function () {
    let filesNumber = this.files.length;

    if (filesNumber) {
        $(this).closest('.contact_choice_file_button').find('.contact_choice_file_text').html('Выбрано файлов: ' + filesNumber);
        $(".contact_choice_file_del").removeClass("hide");
    }

    $('.contact_choice_file_del').click(function (event) {
        $('.contact_choice_file_text').html('Прикрепить файл');
        $(".contact_choice_file_del").addClass("hide");
        $("#contact_input_file").val("");
    });
});
