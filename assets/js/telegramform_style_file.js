let inputs = document.querySelectorAll('.contact-form_input_file');
Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
        labelVal = label.querySelector('.contact-form_file-text').innerText;
    input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
            countFiles = this.files.length;
        if (countFiles)
            label.querySelector('.contact-form_file-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
            label.querySelector('.contact-form_file-text').innerText = labelVal;
    });
});
