angular.module('OaDataApp', ['ngRoute', 'RouteControllers']);
 
angular.module('OaDataApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/accounts/register', {
        templateUrl: 'templates/char.html',
        controller: 'RegisterController'
    });
});