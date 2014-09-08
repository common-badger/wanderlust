'use strict';

angular.module('wanderlustApp')

  .directive('starRating', function(){
    return{
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-star"></span>'
    };
  })

  .directive('tagPrice', function(){
    return{
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-usd"></span>'
    };
  })

  .directive('tagCamera', function(){
    return{
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-camera"></span>'
    };
  })

  .directive('tagTree', function(){
    return{
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-tree-conifer"></span>'
    };
  })

  .controller('ToursCtrl', function ($scope, $location) {

    //Temp tour list data
    $scope.tours = {
      name: 'The Mission Mission',
      length: 'all day'
    };

    //route to tour on click
    $scope.selectedTour = function(){
        $location.path('/tours/showtour');
    };


  });
