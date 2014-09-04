'use strict';

angular.module('wanderlustApp')
  .controller('CreatetourCtrl', function ($scope) {
    var spotIndex = 0;
    $scope.tour = {}; // Overall tour information
    $scope.spots = [{}];

    // var addSpot = function() {
    //   spotCount++;
    //   $scope.spots[spotCount] = {};
    // };

    $scope.createTour = function() {
      console.log($scope.tour);
      console.log($scope.spots);
    };

    // $scope.showNewSpot = function() {
    //   addSpot();
    // };


  });
