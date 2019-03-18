// Changes header on scroll when the scrollTop is bigger than the height of the header nav
$(function () {
	$(document).scroll(function() {
		// excludes mobile menu
		if($(window).width() >= 768) {
			var $nav = $(".navbar-fixed-top");
			$nav.toggleClass("nav-scrolled", $(this).scrollTop() > $nav.height());
		}
	});
});


// Fluid scrollspy header navigation
$(function () {
	$('header a').on('click', function(e) {
		e.preventDefault();
		var sectionId = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000, function(){
			window.location.hash = sectionId;
		});
	});
});

// Fluid scrollspy jumbotron button
$(function () {
	$('#classesBtn').on('click', function(e) {
		e.preventDefault();
		var sectionId = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000, function(){
			window.location.hash = sectionId;
		});
	});
});
