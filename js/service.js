angular.module('SelectionService', [])
		.service('dataService', function(){
  			
  			var charInfo = 0
  			
  			var addInfo = function(newObj) {
    			charInfo = newObj;
 			}

  			var getInfo = function(){
    			return charInfo;
  			}

  			return {
  				addInfo: addInfo,
    			getInfo: getInfo
 			};

});