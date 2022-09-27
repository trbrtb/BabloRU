$(function () {

	$("#burger").on("click", function (event) {
		event.preventDefault();

		$("#burger").toggleClass("active");
		$("#body").toggleClass("active");
		$("#header").toggleClass("active");
		$("#logo_black").toggleClass("active");
		$("#logo_white").toggleClass("active");
		$("#rct").toggleClass("active");
		$("#nav").toggleClass("active");
	});
});

$('#nav').on('click', function () {

	$("#burger").removeClass("active");
	$("#body").removeClass("active");
	$("#header").removeClass("active");
	$("#logo_black").removeClass("active");
	$("#logo_white").removeClass("active");
	$("#rct").removeClass("active");
	$("#nav").removeClass("active");
	//	$('#burger').hide();
});
