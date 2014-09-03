'use strict';

angular.module('wanderlustApp')
  .controller('MainCtrl', function ($scope, $state, $document) {

    // Hacky way to only show background image on body initially
    angular.element($document[0].body).css({
      'overflow-y': 'hidden ! important',
      'overflow-x': 'hidden ! important',
      'background-image': "url('/assets/images/background.jpg')",
      'background-size': 'cover',
      'background-repeat': 'no-repeat'
    });

    $scope.navToToursByLocation = function() {
      // Remove background when navigaging away
      angular.element($document[0].body).css({
        'background-image': 'none'
      });

      // Value of $scope.location can be found in tours' $stateParams
      $state.go('tours', $scope.location);
    };
  });
