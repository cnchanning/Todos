'use strict';

/**
 * @ngdoc function
 * @name packageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the packageApp
 */
angular.module('packageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
