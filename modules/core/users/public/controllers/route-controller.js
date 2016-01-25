angular.module('vendor')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'sample',
        templateUrl: '/views/index.html'
      })
      .when('/about', {
        controller: 'sample',
        templateUrl: '/views/about.html'
      });
  });

