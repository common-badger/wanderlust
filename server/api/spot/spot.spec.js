'use strict';

var chai = require('chai');
var should = chai.Should();
var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Spot = require('./spot.model');

var bikeMural = new Spot({
  title: "Duboce Bikeway Mural",
  city: "San Francisco",
  address: "Church St & Duboce Ave",
  photo: 'http://monacaron.com/sites/default/files/styles/gallery/public/DuboceBikewayMural4_MonaCaron.jpg?itok=tgkN3TBw' // FIXME: Get a local copy.
  description:  "Mona Caron's first mural. It celebrates bicycling in the city of San Francisco."+
                "Over a hundred meters in length and five meters tall. "+
                "http://monacaron.com/murals/making-and-unveiling-duboce-bikeway-mural#sthash.uXs9to50.dpuf",
  action: "See if you can identify Mona and the other contributors depicted in the painting.",
  duration: 16.2,
  reviews: [
    { text:"This mural makes me happy." star:4.5 },
    { text:"This mural puts me into a rage." star:1.0 }
  ],
  tags: ['public art', 'outdoor', 'castro neighborhood'],
  geo: { lon:-122.428210 , lat:37.769457 }
});

var railwayMural = new Spot({
  title: "Market Street Railway Mural",
  city: "San Francisco",
  address: "300 Church Street",
  photo: 'http://monacaron.com/sites/default/files/styles/bottom_gallery/public/mur-cat-HD-msrm-photo1_0.jpg?itok=Ohzm7urj'
  description:  "A Mona Caron mural depcting San Francisco history from the 1920s to an imagined future."+
  action: "See if you can identify Mona and the other contributors depicted in the painting.",
  duration: 7.2,
  reviews: [{ text:"Great visual history of a great city." star:4.0 }],
  tags: ['public art', 'outdoor', 'castro neighborhood'],
  geo: { lon:-122.428482 , lat:37.766129 }
});


describe('Spot Model',function(){

  beforeEach(function(done){
    Spot.remove().exec().then(function(){ done(); });
  });

  it('should save the data expected',function(done){
    bikeMural.save(function(err, data){
      should.not.exist(err);
      should.exist(data);
      done();
    });
  });

  it('should not save data with title bigger than 50 char',function(done){
    var origRailwayMuralTitle = railwayMural.title;
    // Char meter:       "123456789 123456789 123456789 123456789 123456789 123456789 123456"
    railwayMural.title = "This title is a little too long to be permitted into the database.";
    railwayMural.save(function(err,data){
      should.exist(err);
      done();
    });
    railwayMural.title = arigRailwayMuralTitle;
  });

  it('should return the profile when called', function(done){
    railwayMural.save(function(err,data){
      data.profile.should.have.property('title');
      data.profile.should.have.property('address');
      data.profile.should.have.property('description');
      data.profile.should.have.property('rating');
      data.profile.should.have.property('geo'); // TODO: perhaps check inside objects?
      done();
    });
  });

});


describe('Spot REST API', function(){

    beforeEach(function(done){
      Spot.remove().exec().then(function(){
        Spot.create(bikeMural, railwayMural, function(err){ err ? done(err) : done(); });
      });
    });

    it('should respond to GET /api/spots with an array of spots', function(done) {
      request(app)
        .get('/api/spots')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.should.be.instanceof(Array);
          res.body.length.should.equal(2);
          done();
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

}); // describe Spot REST API





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
