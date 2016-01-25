angular.module('vendor')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: "<a href='#/about'>About</a>"
      })
      .when('/about', {
        template: "<a href='#/'>Home</a>"
      });
  });