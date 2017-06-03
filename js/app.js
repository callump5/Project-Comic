angular.module('OaDataApp', ['ngRoute', 'RouteControllers']);
 
angular.module('OaDataApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/characters', {
        templateUrl: 'templates/characters/char.html',
        controller: 'CharacterListController'
    })
    .when('/characters/:id', {
        templateUrl: 'templates/characters/charInfo.html',
        controller: 'CharInfoController'
    })
    .when('/groups', {
    	templateUrl: "templates/groups/groups.html",
    	controller: 'GroupsController'
    })
    .when('/groups/:id', {
        templateUrl: 'templates/groups/groupInfo.html',
        controller: 'GroupInfoController'
    })
    .when('/episodes', {
        templateUrl: "templates/episodes.html",
        controller: 'EpisodesController'
    })
    .when('/reportMistake', {
        templateUrl: 'templates/mistakeForm.html',
        controller: 'ReportMistakeController'
    });

});