'use strict';

describe('Controller: SpotsCtrl', function () {

  // load the controller's module
  beforeEach(module('greenfieldWanderlustApp'));

  var SpotsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpotsCtrl = $controller('SpotsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
