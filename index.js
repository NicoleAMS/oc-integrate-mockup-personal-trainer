$(function () {
  $(document).scroll(function() {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass("nav-scrolled", $(this).scrollTop() > $nav.height());
  });
});

// Fluid scrollspy header navigation
$(function () {
	$('header a').on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000, function(){
			window.location.hash = hash;
		});
	});
});

// Fluid scrollspy jumbotron button
$(function () {
	$('#classesBtn').on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000, function(){
			window.location.hash = hash;
		});
	});
});