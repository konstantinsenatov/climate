var swiper = new Swiper(".news__swiper", {
	navigation: {
		prevEl: ".news__arrow-prev",
		nextEl: ".news__arrow-next",
	},
	slidesPerView: 1,
	breakpoints: {
		769: {
			slidesPerView: '2.5',
		},
		992: {
			slidesPerView: '3',
		}
	}
});