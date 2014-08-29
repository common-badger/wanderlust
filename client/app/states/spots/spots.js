'use strict';
(function(){

  var Spots = function ($stateProvider) {
    $stateProvider
      .state('spots', {
        url: '/spots',
        templateUrl: 'app/states/spots/spots.html',
        controller: 'SpotsCtrl'
      });
  };
  Spots
    .$inject = ['$stateProvider'];
  angular
    .module('greenfieldWanderlustApp')
    .config( Spots );

}).call(this);