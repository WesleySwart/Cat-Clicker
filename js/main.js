//main.js
//Notes//
/*
*	Get image list array from /images -- .ajax request
*	Show list of images in sidebar -- catlist
*	Display clicked sidebar image in viewer -- working, needs formatting
*	Display counter on cat image in viewer when clicked
*	Viewer image caption
*	Add random name to cat and display
*	Add cat objects to catlistArray
* 	Code cleanup (remove unncesseary or old functions/styles/etc)
*/

//Orig script//
/*$(function(){
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
});*/

//New Script//
$(function(){
	loadData();
});

function loadData(){
	
	debugger;
	var catListArray = [];
	var folder = "images/cats/";

	$.ajax({
	url: folder,
	success: function(data){
		$(data).find("a").attr("href", function (i, val){
			if(val.match(/\.jpg|\.png|\.gif/)){
				//Do something
				//$("body").append("<img src='" + folder + val +"'>");
				catListArray.push("cat:<img src='" + folder + val +"'>");
				$('.catlist').append("<li class='catItem'><img src='" + folder + val +"'></li>")
			}
		});
	}
	});

	/*for (var i; i <= catListArray.length; i++){
		var catItem = catListArray[i];
		$('.catList').append("<li><img src='" + folder + val +"'></li>")

	}*/
}

var cat = {
	name: "",
	img: "",
	caption: ""
}

function randomNameGenerator(){
	var names = ["Ben","Jerry","Buddy","Sebastian","Grumpy"];

	var name = Math.floor((Math.random() * names.length) + 1);
	
	return name;
}

//Show cat clicked in sidebar in viewer
//Event delegation bubbles up to catlist class
$('.catlist').on('click', 'li', function(){
	console.log('Cat item clicked in sidebar');
	console.log($(this).html());
	var that = $(this).html();
	$('.viewer').html("");
	$('.viewer').append(that);
})

//Sample code
/*
// clear the screen for testing
document.body.innerHTML = '';

var nums = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            alert(numCopy);
        };
    })(num));

    document.body.appendChild(elem);
};
*/