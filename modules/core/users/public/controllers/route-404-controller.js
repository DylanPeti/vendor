angular.module('vendor')
  .config(function($routeProvider) {
    $routeProvider
      .when('/404', {
        controller: 'LocationController',
        templateUrl: '/views/404.html'

      })
      .otherwise({
        redirectTo: '/404'
      });
  });