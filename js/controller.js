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

    .controller('CharInfoController', ["$scope", 'dataService',  function($scope, dataService) {
        $scope.info = dataService.getInfo();
        $scope.item = characters[$scope.info];
    }])

    .controller('GroupsController', ['$scope', 'dataService', function($scope, dataService) {
        $scope.items = groups;

        $scope.getResult = function($index) {
        $scope.indexResult = $index;
        
        dataService.addInfo($scope.indexResult);
        };
    }])

    .controller('GroupInfoController', ["$scope", 'dataService',  function($scope, dataService) {
        $scope.info = dataService.getInfo();
        $scope.item = groups[$scope.info];
    }])


    

