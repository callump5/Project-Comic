angular.module('SelectionService', [])
		.service('dataService', function(){
  			
  			var charInfo = [];

  			var addInfo = function(newObj) {
    			charInfo.push(newObj);
 			}

  			var getInfo = function(){
    			return charInfo;
  			}

  			return {
  				addInfo: addInfo,
    			getInfo: getInfo
 			};

});