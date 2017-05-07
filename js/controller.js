 angular.module('RouteControllers', [])
    
    .controller('HomeController', function($scope) {
        
    })

    .controller('CharController', ['$scope', 'dataService', function($scope, dataService) {
    
        $scope.items = characters;

        $scope.getResult = function($index, item) {
        $scope.indexResult = $scope.items[$index];
        $scope.itemResult = item;
        $scope.someData = item;
        
        dataService.addInfo($scope.someData);
        };
    }])

    .controller('InfoController', ["$scope", 'dataService',  function($scope, dataService) {
        $scope.info = dataService.getInfo();
    }]);