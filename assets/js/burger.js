$(function () {

	$("#burger").on("click", function (event) {
		event.preventDefault();

//		$(this).toggleClass("active");
		$("#burger").toggleClass("active");
		$("#body").toggleClass("active");
		$("#header").toggleClass("active");
		$("#logo_black").toggleClass("active");
		$("#logo_white").toggleClass("active");
		$("#rct").toggleClass("active");
		$("#nav").toggleClass("active");
	});
});

$(function () {

	$("#nav").on("click", function (event) {
		event.preventDefault();

		$("#burger").removeClass("active");
		$("#body").removeClass("active");
		$("#header").removeClass("active");
		$("#logo_black").removeClass("active");
		$("#logo_white").removeClass("active");
		$("#rct").removeClass("active");
		$("#nav").removeClass("active");
	});
});