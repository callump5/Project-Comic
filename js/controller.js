 angular.module('RouteControllers', [])
    
    .controller('HomeController', function($scope) {
        
    })

    .controller('CharacterListController', ['$scope', '$http',  function($scope, $http) {
        $http.get('data/characters.json').then(function(response) {
            $scope.characters = response.data;

        });
    }])

    .controller('CharInfoController',  ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
        $http.get('data/characters.json').then(function(response) {
            $scope.character = response.data.find(function (character) {
                return (character.id === parseInt($routeParams.id));
            });
        });
    }])

    .controller('GroupsController', ['$scope', '$http',  function($scope, $http) {
        $http.get('data/characters.json').then(function(response) {
            $scope.characters = response.data;

        });
    }])

    .controller('GroupInfoController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
        $http.get('data/characters.json').then(function(response) {
            $scope.character = response.data.find(function (character) {
                return (character.id === parseInt($routeParams.id));
            });
        });
    }])

    .controller('EpisodesController', ['$scope', '$http',  function($scope, $http) {
        $http.get('data/characters.json').then(function(response) {
            $scope.characters = response.data;
        });
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


    

