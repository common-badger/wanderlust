'use strict';

angular.module('wanderlustApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createtour', {
        url: '/tours/createtour',
        templateUrl: 'app/tours/createtour/createtour.html',
        controller: 'CreatetourCtrl'
      });
  })
  .directive('wdlSpot', function() {
    return {
      restrict: 'E',
      scope: {
        spot: '='
      },
      templateUrl: 'app/tours/createtour/wdlSpot.directive.html'
    };
  });