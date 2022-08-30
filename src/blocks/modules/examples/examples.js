var swiper = new Swiper(".examples__swiper", {
	navigation: {
		prevEl: ".examples__arrow-prev",
		nextEl: ".examples__arrow-next",
	},
	pagination: {
		el: ".examples__pagination",
		clickable: true,
	},
	spaceBetween: 40,
});