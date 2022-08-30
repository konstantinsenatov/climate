$(document).ready(function() {
	$('input[type="file"].form-question__file-input').change(function(){
		var question_file = $("input[type='file'].form-question__file-input").val();
		$('.js-form-question__file-span').text(question_file);
	});
});