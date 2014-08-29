'use strict';
(function(){
  var LoginCtrl = function ($scope, Auth, $location, $window) {

    $scope.user       = {};
    $scope.errors     = {};
    $scope.login      = login;
  
    $scope.loginOauth = loginOauth;
  
    /////////////////

    function login(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    }
  
    function loginOauth(provider) {
      $window.location.href = '/auth/' + provider;
    }
  
  };

  LoginCtrl
    .$inject = ['$scope', 'Auth', '$location', '$window'];

  angular
    .module('greenfieldWanderlustApp')
    .controller('LoginCtrl', LoginCtrl);

}).call(this);