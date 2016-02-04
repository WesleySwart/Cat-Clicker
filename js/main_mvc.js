$(function(){
	var model = {
		//add catArray global variable then push to local storage
		init: function(){
			if(!localStorage.catArray){
				localStorage.catArray = JSON.stringify([]);
			}

			var folder = "images/cats/";

			$.ajax({
			url: folder,
			success: function(data){
				$(data).find("a").attr("href", function (i, val){
					if(val.match(/\.jpg|\.png|\.gif/)){
						var cat = {};
						model.generateName();

						//Create cat object and push to local storage array
						cat.index = i;
						cat.name = catName;
						cat.img = "<img src='" + folder + val +"'alt='"+catName+"'>";
						cat.caption = model.generateCaption();
						
						//Local storage
						catArray.push(cat);
						console.log(JSON.stringify(cat));
						localStorage.setItem('catArray', JSON.stringify(cat);

						//Move to view
						//$('.catlist').append("<li class = 'catItem'>" + cat.img + "<p id='catIndex'>" + cat.index + "</p></li>");
					}
				});
			}
			});
		},
		
		add: function(obj){
			var data = JSON.parse(localStorage.catArray);
			data.push(obj);
			localStorage.catArray = JSON.stringify(data);
		},
		
		getAllCats: function(){
			return JSON.parse(localStorage.catArray);
		},
		
		currentCat: null,
		
		generateName: function(){
			var names = ["Ben","Jerry","Buddy","Sebastian","Grumpy","Melon","Thumper","Chester","Mr. Boojangles"];
			var n = Math.floor((Math.random() * names.length - 1) + 1);
			console.log("n: " + n);
			console.log("cat name: " + names[n].toString());
			catName = names[n];

			var catAry = model.getAllCats();
			//Check if name already exists
			$.map(catAry, function(val){
				if(val.name == catName){
					console.log("Cat name already exists! Try again.");
					model.generateName();
				}
				else{
					return catName;
				}
			});
		},

		generateCaption: function(){
			var caption = '';

			caption = 'This is ' + catName +'. See ' + catName + ' run. Run, ' + catName + ', run.';
			console.log("Caption: " + caption);
			return caption;
		}

	};

	var controller = {
		addNewCat: function(catName, catImg){
			model.add({
				name: catStr,
				img: catImg
			});
			view.render();
		},

		getCats: function(){
			return model.getAllCats();
		},

		init: function(){
			model.init();
			viewSidebar.init();
			viewMainViewer.init();
		}
	};

	var viewSidebar = {
		init: function(){
			this.render();
		},
		
		render: function(){
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
			});
		}
	};

	var viewMainViewer = {
		init: function(){
			this.render();
		},
		
		render: function(){

		}
	};

	controller.init();
});