$(function () {
  $(document).scroll(function() {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass("nav-scrolled", $(this).scrollTop() > $nav.height());
  });
});