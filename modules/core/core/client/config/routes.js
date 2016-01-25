'use strict';

// Setting up route
angular.module('vendor').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		$stateProvider.
		state('Home', {
			url: '/home',
			templateUrl: './modules/core/core/client/views/test.html',
		})
		;
	}
]);
