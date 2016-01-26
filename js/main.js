//main.js
$(function(){
	intCounter1 = 0;
	intCounter2 = 0;
});

$('#cat1 p').click(function(e){
	intCounter1++;
	$(this).html( intCounter1.toString());
});

$('#cat2 p').click(function(e){
	intCounter2++;
	$(this).html(intCounter2.toString());
});