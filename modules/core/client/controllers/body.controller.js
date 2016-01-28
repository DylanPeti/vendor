'use strict';

angular.module('vendor').controller('BodyController', ['$scope', '$location', 'Authentication',
	function($scope, $location, Authentication) {

		$scope.authentication = Authentication;
		
		// if (!$scope.authentication.user) $location.path('/authentication/signin');
		$scope.welcome = "welcome";

		$scope.Images = [
		'/core/client/img/gift-cards.jpg', 
		'/core/client/img/register.jpg',
		'/core/client/img/cash-management.jpg',
		'/core/client/img/vend-u.jpg'
		];


		


	}
]);



