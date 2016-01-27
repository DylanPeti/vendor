'use strict';

angular.module('vendor').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		
		$scope.authentication = Authentication;
 
		$scope.signin = function() {
			$http.post('/api/auth/signin', $scope.credentials).success(function(response) {
				
				$scope.authentication.user = response;
	            
	            // If user, redirect to the welcome page.
	
	            $location.path('/welcome');

			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
