var path = require('path');
var expect = require('chai').expect;

var stats = require(path.join(__dirname, './utils.js'));

describe('stats.js ', function () {
  'use strict';

  it('has a correct median() function', function () {
    expect(median).to.be.a('function');
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
    // If this function is expected to be used by the outside world, we can make it more robust.
    //   expect(median(['12'])).to.equal(12); //   etc...
  });

  it('has a correct hyphed_from_spaced() function', function () { // "San Francisco" -> 'san-francisco'
    expect(hyphenated).to.be.a('function');
  });

  it('has a correct spaced_from_hyphed() function', function () { // "san-francisco" -> 'San Francisco'
    expect(hyphenated).to.be.a('function');
  });

});
