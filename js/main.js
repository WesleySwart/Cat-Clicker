//main.js
//Notes//
/*
*	Get image list array from /images
*	Show list of images in sidebar
*	Display clicked sidebar image in viewer
*	Display counter on cat image in viewer when clicked
*	Viewer image caption
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
				$('.catlist').append("<li><img src='" + folder + val +"'></li>")
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
	var names = [];
}

$('.catlist.li.img').click(function(e){
	console.log('clicked cat in sidebar');
	console.log(this);
	$('.viewer').append(this);
});

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