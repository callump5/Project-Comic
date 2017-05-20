angular.module('OaDataApp', ['ngRoute', 'RouteControllers', 'SelectionService']);
 
angular.module('OaDataApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/char', {
        templateUrl: 'templates/char.html',
        controller: 'CharController'
    })
    .when('/groups', {
    	templateUrl: "templates/groups.html",
    	controller: 'GroupsController'
    })
    .when('/episodes', {
        templateUrl: "templates/episodes.html",
        controller: 'EpisodesController'
    })
    .when('/charInfo', {
    	templateUrl: 'templates/charInfo.html',
    	controller: 'CharInfoController'
    })
    .when('/groupInfo', {
    	templateUrl: 'templates/groupInfo.html',
    	controller: 'GroupInfoController'
    })
    .when('/reportMistake', {
        templateUrl: 'templates/mistakeForm.html',
        controller: 'ReportMistakeController'
    });

});