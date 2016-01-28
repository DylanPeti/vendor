'use strict';

angular.module('vendor').controller('BodyController', ['$scope', '$location', 'Authentication',
	function($scope, $location, Authentication) {

		$scope.authentication = Authentication;
		
		// if (!$scope.authentication.user) $location.path('/authentication/signin');
		$scope.welcome = "welcome";

		// $scope.Images = [
		// '/core/client/img/gift-cards.jpg', 
		// '/core/client/img/register.jpg',
		// '/core/client/img/cash-management.jpg',
		// '/core/client/img/vend-u.jpg'
		// ];



		$scope.Images = [
		{
			image: '/core/client/img/gift-cards.jpg', 
			caption: "Attract new customers & increase revenue with gift cards."
		},
		{
			image: '/core/client/img/cash-management.jpg', 
			caption: "Track all cash movements from cash float to register closure."
		},
		{
			image: '/core/client/img/register.jpg', 
			caption: "The beautifully fast web-based checkout experience. Try it now!"
		}, 
		{
			image: '/core/client/img/vend-u.jpg', 
			caption: "Retail ebooks, guides, live events, webinars and training."
		}
		];




		


	}
]);



