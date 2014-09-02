'use strict';

var _ = require('lodash');
var Spot = require('./spot.model');

// Get list of spots
exports.index = function(req, res) {
  Spot.find(function (err, spots) {
    if(err) { return handleError(res, err); }
    return res.json(200, spots);
  });
};

// Get a single spot
exports.show = function(req, res) {
  Spot.findById(req.params.id, function (err, spot) {
    if(err) { return handleError(res, err); }
    if(!spot) { return res.send(404); }
    return res.json(spot);
  });
};

// Creates a new spot in the DB.
exports.create = function(req, res) {
  Spot.create(req.body, function(err, spot) {
    if(err) { return handleError(res, err); }
    return res.json(201, spot);
  });
};

// Updates an existing spot in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Spot.findById(req.params.id, function (err, spot) {
    if (err) { return handleError(res, err); }
    if(!spot) { return res.send(404); }
    var updated = _.merge(spot, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, spot);
    });
  });
};

// Deletes a spot from the DB.
exports.destroy = function(req, res) {
  Spot.findById(req.params.id, function (err, spot) {
    if(err) { return handleError(res, err); }
    if(!spot) { return res.send(404); }
    spot.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
