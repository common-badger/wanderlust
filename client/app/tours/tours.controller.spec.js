'use strict';

describe('Controller: ToursCtrl', function () {

  // load the controller's module
  beforeEach(module('wanderlustApp'));

  var ToursCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToursCtrl = $controller('ToursCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
