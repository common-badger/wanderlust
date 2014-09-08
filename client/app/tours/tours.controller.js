'use strict';

angular.module('wanderlustApp')

  .directive('starRating', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-star"></span>'
    };
  })

  .directive('tagPrice', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-usd"></span>'
    }
  })

  .directive('tagCamera', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-camera"></span>'
    }
  })
  
  .directive('tagTree', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-tree-conifer"></span>'
    }
  })

  .directive('tagDisplayer', function(){
    httpGET.getData(function(data){
      $scope.tours = data;
      return $scopes.tours;    
    });
  })

  // .directive('tourTemplate', function(){
  //   return {
  //     restrict: 'E',
  //     template:
  //      '<div class="tourView" ng-click="selectedTour()">
  //         <img class="map" src="assets/images/SF_Mission_map.png" alt="Mission District">
  //         <div class="tourViewInfo">
  //           <span> {{tours.name}} </span></br>
  //           <span> {{tours.length}} </span></br>
  //           <star-Rating></star-Rating>
  //           <star-Rating></star-Rating>
  //           <star-Rating></star-Rating>
  //           <star-Rating></star-Rating>
  //           <star-Rating></star-Rating><br>
  //           <tag-Price></tag-Price>
  //           <tag-Camera></tag-Camera>
  //           <tag-Tree></tag-Tree>
  //         </div>
  //       </div>'
  //   }
  // })

  .factory('httpGET', function($http){
    return {
      getData: function(callback){
        return $http({
          method: 'GET',
          url: '/api/tours'
          }).success(function(data){
            callback(data);
          });
      }
    }
  })

  .controller('ToursCtrl', function ($scope, $location, $http, httpGET) {
    
    httpGET.getData(function(data){
      $scope.tours = data;
      // $scope.title = $scope.tours.title;
      console.log($scope.tours);
    });

    //route to tour on click
    $scope.selectedTour = function(){
        $location.path('/tours/showtour');
    };



  });
