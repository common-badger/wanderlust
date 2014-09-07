'use strict';

angular.module('wanderlustApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('showtour', {
        url: '/tours/showtour',
        templateUrl: 'app/tours/showtour/showtour.html',
        controller: 'ShowtourCtrl'
      });
  });
