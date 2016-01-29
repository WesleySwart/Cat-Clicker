//main2.js

//Load data into cat object

$(function(){
	loadData();
	var intCounter = 0;
	var altArray = [];
	var cat = {};
	var catArray = [];
})();

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
				//$('.catlist').append("<li class='catItem'><img src='" + folder + val +"'alt='"+randomNameGenerator()+"'></li>")

				//Create cat object and push to array
				cat.name = ;
				cat.img = "<img src='" + folder + val +"'alt='"+randomNameGenerator()+"'>";
				cat.caption = ;
			}
		});
	}
	});
}

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

//Loop through catArray and store caption in cat.caption for each obj in array
function captionGenerator(){
	var caption = '';
	$.each(catArray, function(name, value){
		caption = 'This is ' + value +'.' ' See ' + value + ' run. Run, ' + value + ',run.'
		catArray[name].caption = caption;
	});

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