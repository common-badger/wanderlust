'use strict';

describe('Service: tour', function () {

  // load the service's module
  beforeEach(module('greenfieldWanderlustApp'));

  // instantiate service
  var tour;
  beforeEach(inject(function (_tour_) {
    tour = _tour_;
  }));

  it('should do something', function () {
    expect(!!tour).toBe(true);
  });

});
