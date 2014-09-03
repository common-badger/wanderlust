var path = require('path');
var expect = require('chai').expect;

var stats = require(path.join(__dirname, './stats.js'));

debugger;

describe('median()', function () {
  'use strict';

  it('exists', function () {
    expect(median).to.be.a('function');
  });

  it('correctly computes median of array of numbers', function () {
    expect(median([])).to.equal(0);
    expect(median([-12])).to.equal(-12);
    expect(median([-1, 0])).to.equal(-0.5);
    expect(median([-40.7, -40.7, -40.7])).to.equal(-40.7);
    expect(median([-40.7, -40.7, -40.7, -40.7])).to.equal(-40.7);
    expect(median([0, -40.01, 12, -62.71, 42])).to.equal(0);
    expect(median([111860, -40.7, 12, -62, 42, 27])).to.equal(19.5);
    expect(median([Number.POSITIVE_INFINITY, -40, 12, -62, 42, 27])).to.equal(19.5);
    expect(median([Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, 12, -62, 42, 27])).to.equal(19.5);
    expect(median([4.5e8, Number.NEGATIVE_INFINITY, 42, 62, 42])).to.equal(42);
  });

  // If this function is expected to be used by the outside world, we can make it more robust.
  // it('doesn\'t choke on invalid parameter', function () {
  //   expect(median(['12'])).to.equal(12);
  //   etc...
  // });

});
