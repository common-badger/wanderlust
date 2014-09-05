'use strict';

// var should = require('should');
var chai = require('chai');
var should = chai.Should();
var app = require('../../app');
var request = require('supertest');
var User = require('./user.model');
var Tour = require('../tour/tour.model');

var tourCreater = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password'
});

var traveler = new User({
  provider: 'local',
  name: 'traveler',
  email: 'traveler@123.com',
  password: 'password'
})

var tour1 = new Tour({
  title: 'The Mission Mission',
  author: tourCreater._id,
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
  author: tourCreater._id,
  city:'San Francisco'
});

// beforeEach(function(done){
//   Tour.remove().exec().then(function(){
//     Tour.create(tour1,tour2,function(err){
//       if(err) done(err);
//       done();
//     });
//   });
// });

describe('GET /api/user/:id/tours', function(){
  var token;

  beforeEach(function(done){
    User.create(traveler).then(function(){
      request(app)
        .post('/auth/local')
        .send({
          email: 'traveler@123.com',
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
      Tour.remove().exec().then(function(){
        done();
      });
    });
  });

  it('should not be able to get the tours if not the author', function(done){
    request(app)
      .get('/api/users/' + tourCreater._id + '/tours')
      .set('authorization', 'Bearer ' + token)
      .expect(401)
      .end(function(err,res){
        done();
      });
  });

  it('should be able to get the tours if the author', function(done){
    Tour.create({title: 'created by traveler', author: traveler._id}).then(function(tour){
      request(app)
        .get('/api/users/' + traveler._id + '/tours')
        .set('authorization', 'Bearer ' + token)
        .expect(200)
        .end(function(err,res){
          console.log('*********', res.body);
          res.body.length.should.equal(1);
          done();
        });
    });
  });

});

