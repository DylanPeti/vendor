'use strict';

angular.module('vendor').controller('BodyController', ['$scope', '$location', 'Authentication',
	function($scope, $location, Authentication) {

		$scope.authentication = Authentication;
		
		//If the user is not
		if (!$scope.authentication.user) $location.path('/authentication/signin');
		$scope.welcome = "welcome";

		// Caraousel properties

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



