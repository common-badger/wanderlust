'use strict';
(function(){

  var SpotsCtrl = function($scope) {
    $scope.message = 'Hello';
  };

  SpotsCtrl
    .$inject = ['$scope'];

  angular
    .module('greenfieldWanderlustApp')
    .controller('SpotsCtrl', SpotsCtrl);

}).call(this);