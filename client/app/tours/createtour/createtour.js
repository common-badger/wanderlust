'use strict';

angular.module('wanderlustApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createtour', {
        url: '/tours/createtour',
        templateUrl: 'app/tours/createtour/createtour.html',
        controller: 'CreatetourCtrl'
      });
  });