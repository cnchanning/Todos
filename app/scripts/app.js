'use strict';

/**
 * @ngdoc overview
 * @name packageApp
 * @description
 * # packageApp
 *
 * Main module of the application.
 */
angular
  .module('packageApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
