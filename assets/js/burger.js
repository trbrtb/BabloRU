$(function () {

	$("#burger").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#body").toggleClass("active");
		$("#header").toggleClass("active");
		$("#logo_black").toggleClass("active");
		$("#logo_white").toggleClass("active");
		$("#rct").toggleClass("active");
		$("#nav").toggleClass("active");
	});
});