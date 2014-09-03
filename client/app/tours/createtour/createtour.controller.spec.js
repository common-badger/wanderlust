'use strict';

describe('Controller: CreatetourCtrl', function () {

  // load the controller's module
  beforeEach(module('wanderlustApp'));

  var CreatetourCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatetourCtrl = $controller('CreatetourCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
