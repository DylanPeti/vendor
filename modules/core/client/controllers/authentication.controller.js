'use strict';

angular.module('vendor').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;


		// If user is signed in then redirect back home
		// if ($scope.authentication.user) $location.path('/videos');
		// var creds = $scope.credentials = {
		// 	email: "james@gmail.com",
		// 	password: "Dylan201500"
		// }	
        

 
		$scope.signin = function() {
			console.log($scope.credentials);
			$http.post('/api/auth/signin', $scope.credentials).success(function(response) {
				console.log("myes");
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
