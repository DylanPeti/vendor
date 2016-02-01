'use strict';

angular.module('vendor').controller('BodyController', ['$scope', '$location', 'Authentication',
	function($scope, $location, Authentication) {

		$scope.authentication = Authentication;
		
		//If the user is not
		if (!$scope.authentication.user) $location.path('/signin');
		$scope.welcome = "welcome";
	}
]);



