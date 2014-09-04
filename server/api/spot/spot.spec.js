'use strict';

var chai = require('chai');
var should = chai.Should();
var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/spots', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/spots')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('GET /api/spots', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/spots')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});



// var should = require('should');
var chai = require('chai');
var should = chai.Should();
var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model');
var Spot = require('../spot/spot.model');
var Tour = require('./tour.model');

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
  Tour.remove().exec().then(function(){
    Tour.create(tour1,tour2,function(err){
      if(err) done(err);
      done();
    })
  });
});

describe('GET /api/tours', function() {
  it('should respond with an array of tours', function(done) {
    request(app)
      .get('/api/tours')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        res.body.length.should.equal(2);
        done();
      });
  });
});

describe('POST /api/tours', function(){
  it('should be able to create a new tour', function(done){
    request(app)
      .post('/api/tours')
      .send({title:'the Bridge'})
      .expect(201)
      .end(function(err,res){
        if (err) return done(err);
        Tour.find(function(err,tours){
          tours.length.should.equal(3);
          done();
        });
      })
  });
});

describe('GET /api/tours/:id',function(){
  it('should be able to get a tour by id', function(done){
    request(app)
    .get('/api/tours/' + tour1._id)
    .end(function(err,res){
      res.body.title.should.equal(tour1.title);
      done();
    });
  });
});

describe('POST /api/tours/:id/rating', function(){
  it('should be able to add a review to a tour', function(done){
    request(app)
    .post('/api/tours/'+ tour2._id + '/rating')
    .send({body:'awesome',rating:5})
    .expect(201)
    .end(function(err,res){
      if(err) return done(err);
      Tour.findById(tour2._id,function(err,tour){
        tour.reviews.length.should.equal(1);
        done();
      });
    });
  });
});
