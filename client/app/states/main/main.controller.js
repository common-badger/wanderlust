'use strict';
(function(){

  var MainCtrl = function ($scope, $http) {

    $scope.awesomeThings = [];
    $scope.addThing = addThing;
    $scope.deleteThing = deleteThing;

    getThings();

    ////////////////////

    function getThings (argument) {

      $http.get('/api/things').success(function(awesomeThings) {
        $scope.awesomeThings = awesomeThings;
      
      });

    }
  
    function addThing() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    }

    function deleteThing(thing) {
      $http.delete('/api/things/' + thing._id);
    }
  
  
  };

  MainCtrl
    .$inject = ['$scope', '$http'];
  angular.module('greenfieldWanderlustApp')
  .controller('MainCtrl', MainCtrl);

}).call(this);