'use strict';

// Setting up route
angular.module('vendor').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('vendor', {
			url: '/hi',
			templateUrl: './modules/core/core/client/views/home.html',
		})
		;
	}
]);
