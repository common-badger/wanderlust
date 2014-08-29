'use strict';
(function(){

  var user = function(){

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: someMethod
    };

    //////////////

    function someMethod() {
      return meaningOfLife;
    }
  };

  // User
  //   .$inject = [];
  angular
    .module('greenfieldWanderlustApp')
    .factory('user', user);

}).call(this);