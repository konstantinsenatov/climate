var swiper = new Swiper(".header-need-swiper", {
	slidesPerView: "auto",
	watchSlidesProgress: true,
});
var swiper2 = new Swiper(".content-need-swiper", {
	thumbs: {
		swiper: swiper,
	},
	effect: 'fade',
	autoHeight: true,
	allowTouchMove: false,
});


function playClipinstruction(media) {
	media.play();
}
function stopClipinstruction(media) {
	media.pause();
}

var need_player = document.getElementById("content-need__player");
const need_img = document.querySelector('.content-need__img');
const need_pause = document.querySelector('.content-need__pause');
const need__play = document.querySelector('.content-need__play-btn');

need_img.addEventListener("click", function(e) {
	playClipinstruction(need_player);
	this.classList.add('hide');
	need__play.classList.add('hide');
});
need_pause.addEventListener("click", function (e) {
	stopClipinstruction(need_player);
	need_img.classList.remove('hide');
	need__play.classList.remove('hide');
});