'use strict';

describe('Controller: ShowtourCtrl', function () {

  // load the controller's module
  beforeEach(module('wanderlustApp'));

  var ShowtourCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowtourCtrl = $controller('ShowtourCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
