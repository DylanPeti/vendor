'use strict';

angular.module('vendor').controller('RegistrationController', ['$scope', 'Authentication',
	function($scope, Authentication) {

     $scope.user = Authentication.user;


	$scope.submitForm = function(isValid) {

    if (isValid) {
      alert('our form is amazing');
      }

    };

	}

]);
