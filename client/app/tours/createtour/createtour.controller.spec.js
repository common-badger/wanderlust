'use strict';

describe('Controller: CreatetourCtrl', function () {

  // load the controller's module
  beforeEach(module('wanderlustApp'));

  var CreatetourCtrl, scope, spots;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    spots = [{}];
    scope = $rootScope.$new();
    CreatetourCtrl = $controller('CreatetourCtrl', {
      $scope: scope
    });
  }));

  it('should increase scope.spots array by one, when addSpot()', function () {
    var lenBefore = scope.spots.length;
    scope.addSpot();
    expect(scope.spots.length).toEqual(lenBefore+1);
  });
});
