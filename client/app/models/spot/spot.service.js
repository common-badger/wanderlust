'use strict';
(function(){

  var spot = function(){

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

  // Spot
  //   .$inject = [];
  angular
    .module('greenfieldWanderlustApp')
    .factory('spot', spot);

}).call(this);