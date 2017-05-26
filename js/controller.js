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

    .controller('EpisodesController', ['$scope', 'dataService', function($scope, dataService) {
    
        $scope.items = episodes;

        $scope.getResult = function($index) {
        $scope.indexResult = $index;
        
        dataService.addInfo($scope.indexResult);
        };
    }])

    .controller("ReportMistakeController", ['$scope', '$window', function($scope, $window){
       
        $scope.mistakeReport = {};

        $scope.submitForm = function() {
                if ($scope.mistakeForm.$valid) {
                    $scope.mistakeReport.section = $scope.mistake.section;
                    $scope.mistakeReport.incorrectInfo = $scope.mistake.incorrectInfo;
                    $scope.mistakeReport.corrected = $scope.mistake.corrected;
                    
                    var report = "Thanks for the submission! \n \n" +
                    "Section: \n" + $scope.mistakeReport.section + "\n \n" +
                    "Incorrect Info: \n" + $scope.mistakeReport.incorrectInfo + "\n \n" +
                    "Corrected Info: \n" + $scope.mistakeReport.corrected;
                    $window.alert(report);


                    $scope.mistake.section = " ";
                    $scope.mistake.incorrectInfo = " ";
                    $scope.mistake.corrected = " ";
                      
                }
            }        
    }]);


    

