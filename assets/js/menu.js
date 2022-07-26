$(function () {

	$("#burger").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#header").toggleClass("active");
		$("#nav").toggleClass("active");
	});

	$("#nav").on("click", function (event) {
		event.preventDefault();

		$("#burger").trigger("click");
	});
});