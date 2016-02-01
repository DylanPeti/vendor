'use strict';

angular.module('vendor').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		
		$scope.authentication = Authentication;


        // This needs extracting to a different controller
        $scope.sweetalert = function() {

        	swal({
        		title: 'Clicked!',
        		text: 'This link is for demonstration purposes only!',
        		type: 'info',
        		confirmButtonColor: '#41af4b'
        	});
        }

		$scope.signup = function() {

			$http.post('/api/auth/signup', $scope.credentials).success(function(response) {
				
				// If succcessful assign to user modelg
				$scope.authentication.user = response;

				
				// Redirect to the welcome page
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
