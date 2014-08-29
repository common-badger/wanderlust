'use strict';
(function(){

  var Tours = function ($stateProvider) {
    $stateProvider
      .state('tours', {
        url: '/tours',
        templateUrl: 'app/states/tours/tours.html',
        controller: 'ToursCtrl'
      });
  };
  Tours
    .$inject = ['$stateProvider'];
  angular
    .module('greenfieldWanderlustApp')
    .config( Tours );

}).call(this);