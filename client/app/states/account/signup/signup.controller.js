'use strict';
(function(){
  var SignupCtrl = function ($scope, Auth, $location, $window) {


    $scope.user = {};
    $scope.errors = {};
    $scope.register = register;
  
    $scope.loginOauth = loginOauth;
  

    ///////////////////////

    function register(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    }
  
    function loginOauth(provider) {
      $window.location.href = '/auth/' + provider;
    }
  
  };

  SignupCtrl
    .$inject = ['$scope', 'Auth', '$location', '$window'];
  angular
    .module('greenfieldWanderlustApp')
    .controller('SignupCtrl', SignupCtrl)

}).call(this);