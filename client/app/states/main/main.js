'use strict';
(function(){

  
  
  var main = function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/states/main/main.html',
        controller: 'MainCtrl'
      });
  };

  main
    .$inject = ['$stateProvider'];
  

  angular.module('greenfieldWanderlustApp')
    .config( main );

}).call(this);