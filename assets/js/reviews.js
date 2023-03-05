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

function noSendReviews(form) {}

// Случайные отзывы
$('#reviews_random').html($('#reviews_list_body').html());
$('.reviews_random > li').removeClass("reviews_list_item");
$('.reviews_random > li').addClass("reviews_random_item");

let divs = $('.reviews_random > li');
let indexes = _.shuffle(_.range(divs.length));

if ($(window).width() > 1024) {
    for (let i = 0; i < 3; ++i) {
        let divIndex = indexes[i];
        divs.eq(divIndex).show();
    }
}

if ($(window).width() > 600) {
    for (let i = 0; i < 2; ++i) {
        let divIndex = indexes[i];
        divs.eq(divIndex).show();
    }
}

if ($(window).width() > 319) {
    for (let i = 0; i < 1; ++i) {
        let divIndex = indexes[i];
        divs.eq(divIndex).show();
    }
};