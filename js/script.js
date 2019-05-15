$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Development Engineer.", "Machine Learning Engineer", "Web Developer"],
		typeSpeed: 60,
		loop: true,
		startDelay: 500,
		showCursor: false
	});

});