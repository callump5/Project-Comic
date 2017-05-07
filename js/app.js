angular.module('OaDataApp', ['ngRoute', 'RouteControllers']);
 
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
    .when('/info', {
    	templateUrl: 'templates/info.html',
    	controller: 'InfoController'
    });

});