var path = require('path');
var expect = require('chai').expect;

var Gruntfile = require(path.join(__dirname, '..', './Gruntfile.js'));

describe('Gruntfile()', function () {
  'use strict';

  it('exists', function () {
    expect(Gruntfile).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
