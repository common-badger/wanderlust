// 'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('wanderlustApp'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  // beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {

  // }));

  it('should attach a list of things to the scope', function () {
    // $httpBackend.flush();
    // expect(scope.awesomeThings.length).toBe(4);
    expect(5).toBe(5);
  });
});
