'use strict';

var chai = require('chai');
var should = chai.Should();
var Promise = require('bluebird');
// var Tour = Promise.promisifyAll(require('./tour.model'));
var Tour = require('./tour.model');
var User = require('../user/user.model');



var user = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password'
});

var tour = new Tour({
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

describe('Tour Model',function(){
  beforeEach(function(done){
  	Tour.remove().exec().then(function(){
  	  done();
  	});
  });

  it('should save the data expected',function(done){
  	tour.save(function(err,data){
  	  should.not.exist(err);
  	  should.exist(data);
  	  done();
  	})
  });

  it('should not save data with title bigger than 50 char',function(done){
  	var tourMax = new Tour({
  	  title: 'avonawoevnapowiniruvirunipuraniuvnianvrvaowvanoiwnvepawnoievnauernvoinuviapwouaowpnvpowienv'
  	});
  	tourMax.save(function(err,data){
  	  should.exist(err);
  	  done();
  	});
  });

//come back to this test later
  // it('should fail when saving tour with same title',function(done){
  // 	tour.save(function(err,data){
  // 	  console.log('+++++++',data)
  // 	  var tourDup = new Tour({title: 'The Mission Mission'});
  // 	  tourDup.save(function(err,data){
  // 	  	console.log('------',data);
  // 	  	should.exist(err);
  // 	  	done();
  // 	  })
  // 	})
  // });

  it('should return the profile when called', function(done){
  	tour.save(function(err,data){
  	  data.profile.should.have.property('title');
  	  data.profile.should.have.property('author');
  	  data.profile.should.have.property('description');
  	  data.profile.should.have.property('rating');
  	  data.profile.should.have.property('duration');
  	  done();
  	});
  });

  // it('should be able to add reviews', function(done){
  //   tour.save(function(err,data){
  //     data.addReviews({body:'soso',rating:2},function(err,data){
  //       data.reviews.length.should.equal(3);
  //       done();
  //     });
  //   });
  // });


  // it('should be able to add spots', function(done){
  //   tour.save(function(err,data){
  //     var newSpot = new Spot({name:'bbq'});
  //     // data.addSpotAsync(newSpot)
  //     //     .then(data.spots.length.should.equal(3));
  //     done();
  //   });
  // });
});

