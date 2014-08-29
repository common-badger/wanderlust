'use strict';

describe('Service: spot', function () {

  // load the service's module
  beforeEach(module('greenfieldWanderlustApp'));

  // instantiate service
  var spot;
  beforeEach(inject(function (_spot_) {
    spot = _spot_;
  }));

  it('should do something', function () {
    expect(!!spot).toBe(true);
  });

});
