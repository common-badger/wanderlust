/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Tour = require('../api/tour/tour.model');


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Tour.find({}).remove(function() {
  User.find({name:'Test User'}, function(err,user){
    Tour.create([{
      title: 'The Mission Mission',
      author: user._id,
      description: 'dig out the places to eat around Hack Reactor',
      reviews:[{body:'good',rating:4},{body:'okay',rating:3}],
      city: 'San Francisco',
      duration: 600,
      theme: ['Romantic'],
      neighborhood: ['Mission']
    },{
      title: 'Wonderful Sunset',
      author: user._id,
      description: 'find out the good hiking place hidden here',
      reviews:[{body:'This is awesome!', rating: 5}],
      city: 'San Francisco',
      duration: 600,
      theme: ['Nighttime'],
      neighborhood: ['Sunset']
    }]);
  })
});