'use strict';

var Tour = require('../tour/tour.model');

// Get all the tours in all the cities
exports.index = function(req, res) {
  Tour.find(function (err, tours) {
    if(err) { return handleError(res, err); }
    return res.json(200, tours);
  });
};

// Get tour around a specific city
exports.byCity = function(req,res) {
  Tour.find({city: req.params.city_name.replace('-',' ')}, function(err,tours){
    if(err) {return handleError(res,err); }
    if(!tours) {return res.send(404);}
    return res.json(200,tours);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}