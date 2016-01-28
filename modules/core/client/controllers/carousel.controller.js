'use strict';

angular.module('vendor').controller('CarouselController', ['$scope',
	function($scope) {

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



