'use strict';

angular.module('vendor').controller('HomeController', ['$scope',
	function($scope) {
		// This provides Authentication context.
		$scope.string = "printme";
	}
]);
