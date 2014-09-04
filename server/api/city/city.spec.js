'use strict';

var chai = require('chai');
var should = chai.Should();
var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model');
var Spot = require('../spot/spot.model');
var Tour = require('../tour/tour.model');

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

var tour1 = new Tour({
  title: 'The Mission Mission',
  author: user._id,
  description: 'dig out the places to eat around Hack Reactor',
  reviews:[{body:'good',rating:4},{body:'okay',rating:3}],
  city: 'San Francisco',
  duration: 600,
  theme: ['Romantic'],
  neighborhood: ['Mission'],
  spots: [spot1._id, spot2._id]
});

var tour2 = new Tour({
  title: 'Grand Sunset',
  author: user._id,
  city:'San Francisco'
});

beforeEach(function(done){
  Spot.remove().exec();
  Tour.remove().exec().then(function(){
    Tour.create(tour1,tour2,function(err){
      if(err) done(err);
      done();
    });
  });
});

describe('GET /api/citys', function() {
  it('should respond with tours around the city requested', function(done){
    Tour.create({title: 'Football', city: 'Columbus'})
    .then(function(){
      request(app)
        .get('/api/city/San-Francisco')
        .expect(200)
        .end(function(err,res){
          if(err) return done(err);
          res.body.length.should.equal(2);
          done();
        });  
    });
  });
});

