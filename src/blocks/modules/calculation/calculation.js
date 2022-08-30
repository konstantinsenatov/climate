$(document).ready(function() {
	$('.options-calculation__select1').select2();
});
$(document).ready(function() {
	$('.options-calculation__select2').select2();
});
$(document).ready(function() {
	$('.options-calculation__select3').select2();
});

let defaultValue = 'S²';

const input = document.querySelector(".options-calculation__input-range input");
const value = document.querySelector(".options-calculation__value");

value.innerHTML = defaultValue;

input.addEventListener("input", () => {
	value.value = input.value + 'м²';
})

var swiper = new Swiper(".tabs-calculation__swiper", {
	pagination: {
		el: ".tabs-calculation__pag",
		clickable: true,
	},
	allowTouchMove: false,
	effect: 'fade',
	autoHeight: true,
});