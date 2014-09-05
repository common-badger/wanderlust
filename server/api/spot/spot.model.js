// 'use strict';

// var mongoose = require('mongoose'),
//     Schema = mongoose.Schema,
//     validate = require('mongoose-validator'),
//     User = require('../user/user.model.js'),
//     uniqueValidator = require('mongoose-unique-validator');

// // FIXME: Either DB or shared JS file.
// var cities = [
//   'San Francisco',
//   'New York'
// ];

// var SpotSchema = new Schema({
//   title: {type:String, required:true, trim:true}, // unique within a city
//   city: {type:String, enum: cities},  // name of city or similarly sized localle - like a national park
//   address: String,                    // human-readable: street address, or clear instructions to find
//   photo: String,                      // file name of the canonical photo of the feature
//   description: String,                // what is this spot and why do we want to visit it?
//   action: String,                     // suggestion of a physical interaction to have with the object
//   duration: Number,                   // Median time in minutes spent by other users at this spot
//   points: Number,                     // Integer used by game modes
//   reviews: [{ text:String, star:{type:Number,max:5,min:0} }],     // array of opinions
//   // tags: [String, enum:tags],          // tags are objective attributes; themese are subjective
//   geo: { lon:{type:Number,min:-180,max:180} , lat:{type:Number,min:-90,max:90} }
//   // task or achievement instead of title, city, description, action, duration, reviews
// });

// SpotSchema
//   .virtual('profile')
//   .get(function(){
//     return {
//       title: this.title,
//       address: this.address,
//       description: this.description,
//       // rating: median(_.pluck(this.reviews, star)),
//       geo: this.geo
//     };
//   });

// module.exports = mongoose.model('Spot', SpotSchema);
