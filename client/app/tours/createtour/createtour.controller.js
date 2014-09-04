'use strict';

angular.module('wanderlustApp')
  .controller('CreatetourCtrl', function ($scope) {
    $scope.spots = [{}];
    $scope.tour = {
      spots: $scope.spots
    };

    $scope.addSpot = function() {
      $scope.spots.push({});
    };

    $scope.createTour = function() {
      console.log($scope.tour);
      console.log($scope.spots);
    };
  });
