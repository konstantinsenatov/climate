$(document).ready(function() {
	$(document).on('click', '.hero__btn', function(event) {
		$('.popap-hero, .popap-hero-back').addClass('_active');
		$('body').addClass('overflow-hidden');
	});
	$(document).on('click', '.popap-hero-back, .popap-hero__close', function(event) {
		$('.popap-hero, .popap-hero-back').removeClass('_active');
		$('body').removeClass('overflow-hidden');
	});
});
