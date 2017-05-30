angular
    .module('OaDataApp', ['ngRoute', 'RouteControllers'])
    .config(function($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);  // Enable href routing without hashes
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .when('/characters', {
                templateUrl: 'templates/characters/list.html',
                controller: 'CharacterListController'
            })
            .when('/characters/:id', {
                templateUrl: 'templates/characters/detail.html',
                controller: 'CharacterDetailController'
            })
            .when('/episodes', {
                templateUrl: 'templates/episodes/detail.html',
                controller: 'EpisodesListController'
            })
            .when('/groups', {
                templateUrl: 'templates/groups/list.html',
                controller: 'GroupsListController'
            })
            .when('/groups/:id', {
                templateUrl: 'templates/groups/detail.html',
                controller: 'GroupDetailController'
            })
            .when('/reportMistake', {
                templateUrl: 'templates/mistakeForm.html',
                controller: 'ReportMistakeController'
            })
    });