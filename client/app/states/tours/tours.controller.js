'use strict';
(function(){

  var ToursCtrl = function($scope) {
    $scope.message = 'Hello';
  };

  ToursCtrl
    .$inject = ['$scope'];

  angular
    .module('greenfieldWanderlustApp')
    .controller('ToursCtrl', ToursCtrl);

}).call(this);