'use strict';

angular.module('vendor').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: '/core/client/views/home.html',
			controller: 'HomeController'
		})

		.when('/home', {
			templateUrl: '/core/client/views/test.html',
			controller: 'BodyController'
		});


	$locationProvider.html5Mode(true);

}]);