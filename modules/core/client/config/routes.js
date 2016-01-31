'use strict';

angular.module('vendor').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

   $routeProvider.otherwise('/');
	$routeProvider
		.when('/', {
			templateUrl: '/core/client/views/signin.html',
			controller: 'AuthenticationController'
		})

		.when('/welcome', {
			templateUrl: '/core/client/views/welcome.html',
			controller: 'BodyController'
     })
		.when('/signin', {
			templateUrl: '/core/client/views/signin.html',
			controller: 'AuthenticationController'
     })
		.when('/signup', {
			templateUrl: '/core/client/views/signup.html',
			controller: 'AuthenticationController'
     })

	$locationProvider.html5Mode(true);

}]);