'use strict';

// Authentication service for user variables
angular.module('vendor').factory('Authentication', ['$window',
	function($window) {
		var auth = {
			user: $window.user
		};

		return auth;
	}
]);
