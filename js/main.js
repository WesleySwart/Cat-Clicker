//main.js
$(function(){
	intCounter1 = 0;
	intCounter2 = 0;
});

$('#cat1 img, #cat1 p').click(function(e){
	intCounter1++;
	$('#cat1 p').html( intCounter1.toString());
});

$('#cat2 img, #cat2 p').click(function(e){
	intCounter2++;
	$('#cat2 p').html( intCounter2.toString());
});