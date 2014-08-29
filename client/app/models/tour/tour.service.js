'use strict';
(function(){

  var tour = function(){

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

  // Tour
  //   .$inject = [];
  angular
    .module('greenfieldWanderlustApp')
    .factory('tour', tour);

}).call(this);