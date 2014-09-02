'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SpotSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Spot', SpotSchema);