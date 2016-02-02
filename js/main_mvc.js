$(function(){
	var model = {
		init: function(){
			if(!localStorage.cats){
				localStorage.cats = JSON.strinify([]);
			}
		},
		add: function(obj){
			var data = JSON.parse(localStorage.cats);
			data.push(obj);
			localStorage.cats = JSON.stringify(data);
		}
		getAllCats: function(){
			return JSON.parse(localStorage.cats);
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

		},
		render: function(){
			
		}
	};

	var viewMainViewer = {
		init: function(){

		},
		render: function(){

		}
	};

	controller.init();
});