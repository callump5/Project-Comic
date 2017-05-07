 angular.module('RouteControllers', [])
    
    .controller('HomeController', function($scope) {
        
    })

    .controller('CharController', ['$scope', function($scope, selectionService) {
    
        $scope.items = characters;
      
        $scope.getResult = function($index, item) {
        $scope.indexResult = $scope.items[$index];
        $scope.itemResult = item;
        };

        $scope.callToAddSelectionList = function(currObj){
            selectionService.addSelect(currObj);
        };

    }])

    .controller('InfoController', function($scope, selectionService) {

        $scope.selects = selectionService.getSelection();
    });