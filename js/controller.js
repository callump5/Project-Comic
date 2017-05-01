angular.module('RouteControllers', [])
    
    .controller('HomeController', function($scope) {
        
    })

    .controller('CharController', function($scope) {

    		var newRow = document.createElement("div");    		
    		document.getElementById("hub").appendChild(newRow)
    		newRow.className += ("row")
    		newRow.setAttribute("id", "row1")
    	
    		for (var i = 0; i < characters.length ; i++) {
    			if (i==0){

    			}

    			var newTile = document.createElement("div");
    			var newHeader = document.createElement("h2");
    			var newImg = document.createElement("img");

	    		var element = document.getElementById("row1");

    			var name = document.createTextNode(characters[i].name);
    			var info = document.createTextNode(characters[i].info);

    			element.appendChild(newTile);
    			newTile.className += ("tile col-sm-1");
    			newTile.appendChild(newImg);
    			newImg.setAttribute("src", characters[i].img);
    			newTile.appendChild(newHeader);
    			newHeader.appendChild(name);
    		}
    })
