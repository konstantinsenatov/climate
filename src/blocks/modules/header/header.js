$(document).ready(function() {
	$(document).on('click', '.top-header__burger', function(event) {
		$('.top-header').toggleClass('js-top-header-active');
		$('.bottom-header').toggleClass('js-bottom-header-active');
		$('body').toggleClass('overflow-hidden');
	});
});



$(document).ready(function() {
	$('.header-item-click').on('click', function() {
		let href = $(this).attr('href');
		
		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, {
			duration: 700,
			easing: "linear"
		});

		return false;
	});
});