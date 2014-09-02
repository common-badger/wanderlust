'use strict';

var chai = require('chai');
var should = chai.should();
var Tour = require('./tour.model');
var User = require('../user/user.model');
var Spot = require('../spot/spot.model');

var user = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password'
});

var spot1 = new Spot({
  name: 'the mall',
  info: 'eat',
  active: 'true'
});

var spot2 = new Spot({
  name: 'subway',
  info: 'lunch',
  active: 'true'
});

var tour = new Tour({
  title: 'The Mission Mission',
  author: ''
})