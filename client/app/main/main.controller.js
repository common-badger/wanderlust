'use strict';

angular.module('wanderlustApp')
  .controller('MainCtrl', function ($scope, $state, $location) {

    $scope.navToToursByLocation = function() {
      // Value of $scope.location can be found in tours' $stateParams
      $state.go('tours', $scope.location);
    };
  });
