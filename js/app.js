angular.module('OaDataApp', ['ngRoute', 'RouteControllers']);
 
angular.module('OaDataApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/characters', {
        templateUrl: 'templates/char.html',
        controller: 'CharacterListController'
    })
    .when('/characters/:id', {
        templateUrl: 'templates/charInfo.html',
        controller: 'CharInfoController'
    })
    .when('/groups', {
    	templateUrl: "templates/groups.html",
    	controller: 'GroupsController'
    })
    .when('/episodes', {
        templateUrl: "templates/episodes.html",
        controller: 'EpisodesController'
    })
    .when('/groups/:id', {
    	templateUrl: 'templates/groupInfo.html',
    	controller: 'GroupInfoController'
    })
    .when('/reportMistake', {
        templateUrl: 'templates/mistakeForm.html',
        controller: 'ReportMistakeController'
    });

});