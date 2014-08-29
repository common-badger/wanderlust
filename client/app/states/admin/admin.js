'use strict';
(function(){
  
  
  var admin = function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/states/admin/admin.html',
        controller: 'AdminCtrl'
      });
  };
  admin
    .$inject = ['$stateProvider'];
  
  angular
    .module('greenfieldWanderlustApp')
    .config( admin );
}).call(this);