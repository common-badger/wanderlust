'use strict';

(function(){
  
  
  var account = function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/states/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/states/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/states/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  };

  account
    .$inject = ['$stateProvider'];
  
  angular
    .module('greenfieldWanderlustApp')
    .config( account );
}).call(this);