//script.js
$(function(){
	intCounter = 0;
});

$('#counter').click(function(e){
	intCounter++;
	$(this).html('<p>' + intCounter.toString() + '<p>');
});