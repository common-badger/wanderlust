'use strict';

// var should = require('should');
var chai = require('chai');
var should = chai.Should();
var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model');
var Tour = require('./tour.model');

var user = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password'
});

var tour1 = new Tour({
  title: 'The Mission Mission',
  author: user._id,
  description: 'dig out the places to eat around Hack Reactor',
  reviews:[{body:'good',rating:4},{body:'okay',rating:3}],
  city: 'San Francisco',
  cost:'$$',
  duration: 'All day',
  theme: ['Romantic'],
  neighborhood: ['Mission'],
  spots:[{task: 'take a pic', points: 5}, {task: 'get a sword', points: 10}]
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
    });
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

describe('GET /api/tours/:id',function(){
  it('should be able to get a tour with associated spots by id', function(done){
    request(app)
    .get('/api/tours/' + tour1._id)
    .end(function(err,res){
      res.body.title.should.have.equal('The Mission Mission');
      done();
    });      
  });
});


describe('POST /api/tours', function(){
  var token;

  beforeEach(function(done){
    User.create(user).then(function(){
      request(app)
        .post('/auth/local')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .expect(200)
        .end(function(err,res){
          token = res.body.token;
          done();
        })
    });
  });

  afterEach(function(done){
    User.remove().exec().then(function(){
      done();
    });
  });

  it('should be able to create a new tour', function(done){
    request(app)
      .post('/api/tours')
      .send({title:'the Bridge'})
      .set('authorization', 'Bearer ' + token)
      .expect(201)
      .end(function(err,res){
        if (err) return done(err);
        Tour.find(function(err,tours){
          tours.length.should.equal(3);
          done();
        });
      });
  });

  it('should be able to add a review to a tour through /:id/rating', function(done){
    request(app)
      .post('/api/tours/'+ tour2._id + '/rating')
      .send({body:'awesome',rating:5})
      .set('authorization', 'Bearer ' + token)
      .expect(201)
      .end(function(err,res){
        if(err) return done(err);
        Tour.findById(tour2._id,function(err,tour){
          tour.reviews.length.should.equal(1);
          tour.reviews[0].reviewer.toString().should.equal(user._id.toString());
          done();
        });
      });
  });

  

});

