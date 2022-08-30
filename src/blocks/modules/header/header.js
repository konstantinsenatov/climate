$(document).ready(function() {
	$(document).on('click', '.top-header__burger', function(event) {
		$('.top-header').toggleClass('js-top-header-active');
		$('.bottom-header').toggleClass('js-bottom-header-active');
		$('body').toggleClass('overflow-hidden');

	});
});