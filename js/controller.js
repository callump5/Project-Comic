 angular.module('RouteControllers', [])
    
    .controller('HomeController', function($scope) {
        
    })

    .controller('CharController', ['$scope', 'dataService', function($scope, dataService) {
    
        $scope.items = characters;

        $scope.getResult = function($index) {
        $scope.indexResult = $index;
        
        dataService.addInfo($scope.indexResult);
        };
    }])

    .controller('InfoController', ["$scope", 'dataService',  function($scope, dataService) {
        $scope.info = dataService.getInfo();
        $scope.char = characters[$scope.info];
    }]);