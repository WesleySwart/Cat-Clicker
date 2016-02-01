//main.js 
// OLD

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
*
*	Use closer ()
*	Load data into cat obj and use from there
*/

//New Script//
$(function(){
	loadData();
	intCounter = 0;
	altArray = [];
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
				//catListArray.push("cat:<img src='" + folder + val +"'>");
				$('.catlist').append("<li class='catItem'><img src='" + folder + val +"'alt='"+randomNameGenerator()+"'></li>")
			}
		});
	}
	});
}

var cat = {
	name: "",
	img: "",
	caption: ""
}

//TODO: Getting undefined for some names; look at random calculation
function randomNameGenerator(){
	var names = ["Ben","Jerry","Buddy","Sebastian","Grumpy","Melon","Thumper","Chester","Mr. Boojangles"];
	var n = Math.floor((Math.random() * names.length - 1) + 1);
	console.log("n: " + n);

	console.log("cat name: " + names[n].toString());

	//Check if name already exists in array
	if($.inArray(names[n], altArray) != -1){
		console.log("Cat name already exists! Try again.")
		randomNameGenerator();
	}
	else{
		altArray.push(names[n]);
		return names[n];
	}
}

//Show cat clicked in sidebar in viewer
//Event delegation bubbles up to catlist class
$('.catlist').on('click', 'li', function(){
	console.log('Cat item clicked in sidebar');
	console.log($(this).html());
	var pic = $(this).html();
	$('.viewer').html("");
	intCounter = 0;
	$('.viewer').html("<h2>" + $(pic).first().attr("alt") + "</h2>" + pic + "<p id='counter'></p>")
})

//Show number of clicks on cat in viewer
$('.viewer').on('click', 'img', function(){
	console.log('Viewer img clicked');
	intCounter++;
	$('#counter').html( intCounter.toString());
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