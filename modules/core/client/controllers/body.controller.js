'use strict';

angular.module('vendor').controller('BodyController', ['$scope', '$location', 'Authentication',
	function($scope, $location, Authentication) {

		$scope.authentication = Authentication;
		console.log($scope.authentication);
		if (!$scope.authentication.user) $location.path('/authentication/signin');

		$scope.welcome = "welcome";
	}
]);


