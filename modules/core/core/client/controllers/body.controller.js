'use strict';

angular.module('vendor').controller('BodyController', ['$scope',
	function($scope) {
		// Expose view variables
		// $scope.$state = $state;

		$scope.variable = "hi";
	}
]);
