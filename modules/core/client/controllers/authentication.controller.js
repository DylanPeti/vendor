'use strict';

angular.module('vendor').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		
		$scope.authentication = Authentication;
		$scope.guestMsg = false;
		$scope.usernameMsg = "Enter your Email or Username";
		$scope.passwordMsg = "Please enter your Password";

		$scope.click = function() {
		   $scope.guestMsg = false;
		}

		$scope.signup = function() {

			$http.post('/api/auth/signup', $scope.credentials).success(function(response) {
				
				// If sucjcessful we assign the response to the global user model
				$scope.authentication.user = response;

				
				// And redirect to the index page
				$location.path('/welcome');

			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/api/auth/signin', $scope.credentials).success(function(response) {
				
				$scope.authentication.user = response;
	            
	            // If user, redirect to the welcome page.
	
	            $location.path('/welcome');

			}).error(function(response) {
				$scope.error = response.message;
				$scope.guestMsg = "That user doesn't exist";
			});
		};
	}
]);
