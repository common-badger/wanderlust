'use strict';

var _ = require('lodash');
var Tour = require('./tour.model');
var Spot = require('../spot/spot.model');

// Get list of tours
exports.index = function(req, res) {
  Tour.find(function (err, tours) {
    if(err) { return handleError(res, err); }
    return res.json(200, tours);
  });
};

// Get a single tour
exports.show = function(req, res) {
  Tour.findById(req.params.id).exec()
      .then(function(tour){
        if(!tour) {return res.send(404);}
        Spot.find({'_id': {$in: tour.spots}}, function(err,spots){
          return res.json({tour:tour,spots:spots});
        });
      });
};

// Creates a new tour in the DB.
exports.create = function(req, res) {
  Tour.create(req.body, function(err, tour) {
    if(err) { return handleError(res, err); }
    return res.json(201, tour);
  });
};

// Updates an existing tour in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Tour.findById(req.params.id, function (err, tour) {
    if (err) { return handleError(res, err); }
    if(!tour) { return res.send(404); }
    var updated = _.merge(tour, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, tour);
    });
  });
};

// Deletes a tour from the DB.
exports.destroy = function(req, res) {
  Tour.findById(req.params.id, function (err, tour) {
    if(err) { return handleError(res, err); }
    if(!tour) { return res.send(404); }
    tour.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

//Adds a review to a tour
exports.addReview = function(req,res) {
  if(req.body._id) {delete req.body._id;}
  Tour.findByIdAndUpdate(req.params.id,{$push:{reviews:req.body}},function(err,tour){
    if(err) {return handleError(res,err);}
    if(!tour) {return res.send(404);}
    res.send(201);
  });
};


function handleError(res, err) {
  return res.send(500, err);
}