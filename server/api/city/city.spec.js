'use strict';

var chai = require('chai');
var should = chai.Should();
var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model');
var Tour = require('../tour/tour.model');

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


describe('GET /api/citys', function() {

  beforeEach(function(done){
    User.create(user).then(function(){
      Tour.remove().exec().then(function(){
        Tour.create(tour1,tour2,function(err){
          if(err) done(err);
          done();
        });  
      });   
    });
  });

  afterEach(function(done){
    User.remove().exec().then(function(){
      done();
    });
  });

  it('should have a user', function(done){
    User.find(function(err,user){
      should.exist(user);
      done();
    })
  });

  it('should allow token to be requested', function(done){
    request(app)
      .post('/login')
      .type('form')
      .send({
        email: 'test@test.com',
        password: 'password' 
      })
      .expect(200)
      .end(function(err,res){
        console.log('---------',err);
        console.log("+++++++",res.body);
        done();
      });
  })

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

