//main2.js 
//CURRENT

//Notes//
/*
*	Get image list array from /images -- .ajax request
*	Show list of images in sidebar -- catlist
*	Display clicked sidebar image in viewer -- working, needs formatting
*	Display counter on cat image in viewer when clicked -- done, needs formatting
*	Viewer image caption
*	Add random name to cat and display -- randomNameGenerator()
*	Add cat objects to catArray[] -- done
* 	Code cleanup (remove unncesseary or old functions/styles/etc) -- sidebar and main viewer need formatting
* 	Header/footer needed
*/

var catClicker = (function($){

	catArray = [];

	loadData();
})(jQuery);

//Load initial data
//Generate random cat name and store name, image locations, and captions in cat object
//Create list of cats in sidebar

function loadData(){
	
	debugger;
	var folder = "images/cats/";

	$.ajax({
	url: folder,
	success: function(data){
		$(data).find("a").attr("href", function (i, val){
			if(val.match(/\.jpg|\.png|\.gif/)){
				var cat = {};
				randomNameGenerator();

				//Create cat object and push to array
				cat.index = i;
				cat.name = catName;
				cat.img = "<img src='" + folder + val +"'alt='"+catName+"'>";
				cat.caption = captionGenerator();
				catArray.push(cat);

				$('.catlist').append("<li class = 'catItem'>" + cat.img + "<p id='catIndex'>" + cat.index + "</p></li>");
			}
		});
	}
	});
}

//Generate random name for cat on load. Repeat if name already exists.
function randomNameGenerator(){
	var names = ["Ben","Jerry","Buddy","Sebastian","Grumpy","Melon","Thumper","Chester","Mr. Boojangles"];
	var n = Math.floor((Math.random() * names.length - 1) + 1);
	console.log("n: " + n);
	console.log("cat name: " + names[n].toString());
	catName = names[n];

	//Check if name already exists
	$.map(catArray, function(val){
		if(val.name == catName){
			console.log("Cat name already exists! Try again.");
			randomNameGenerator();
		}
		else{
			return catName;
		}
	});
}

//Loop through cat object and store caption in cat.caption for each obj in array
function captionGenerator(){
	var caption = '';

	caption = 'This is ' + catName +'. See ' + catName + ' run. Run, ' + catName + ', run.';
	console.log("Caption: " + caption);
	return caption;

}

//Show cat clicked in sidebar in main viewer
//Event delegation bubbles up to catlist class
$(".catlist").on('click', 'li', function(){
	console.log('Cat item clicked in sidebar');
	console.log($(this).html());
	var pic = $(this).html();
	var caption;
	$('.viewer').html("");
	intCounter = 0;

	//Get caption from catArray where pic index matches cat index
	var index = $(pic).filter("#catIndex");
	$.map(catArray, function(val){
		if(val.index == $(index).html()){
			caption = val.caption;
		}
	});

	$('.viewer').html("<h2>" + $(pic).first().attr("alt") + "</h2>" + pic + "<p id='counter'></p><p id='caption'>" + caption + "</p>");
})

//Show number of clicks on cat in viewer
$(".viewer").on('click', 'img, #counter', function(){
	console.log('Viewer img clicked');
	intCounter++;
	$('#counter').html(intCounter.toString());
})