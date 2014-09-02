'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SpotSchema = new Schema({
  title:   String,    // what is this spot called? (unique name within a city)
  address: String,    // short human-readable "where to find it"
  action:  String,    // brief paragraph suggesting a fun action to do when you arrive
  photo:   String,    // file name of the canonical photo of the spot
  tags:    [String],  // array of strings which specify some attributes about the spot
  geo:     { lon:Number , lat:Number }
});

module.exports = mongoose.model('Spot', SpotSchema);
