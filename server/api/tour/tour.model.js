'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    validate = require('mongoose-validator'),
    Spot = require('../spot/spot.model.js'),
    User = require('../user/user.model.js');

var titleValidate = [
  validate({
  	validator: 'isLength',
  	arguments: [0,50],
  	message: 'title should be less than 50 characters'
  })
];

var cities = 'San Francisco,New York,Los Angelous'.split(',');

var TourSchema = new Schema({
  title: {type:String, unique:true, required:true, validate:titleValidate, trim:true},
  author: {type: Schema.ObjectId, ref: User},
  description: String,
  reviews: [{body: String, rating: {type:Number, max:5, min:0}}],
  city: {type:String,enum: cities},
  duration: String,
  spots: [{type: Schema.ObjectId, ref: Spot}] 
});

TourSchema
  .virtual('profile')
  .get(function(){
    var sum = 0;
    for(var i = 0; i < this.reviews.length; i++){
      sum += this.reviews.rating;
    }

    return{
      'title': this.title,
      'author': this.author,
      'description': this.description,
      'rating': sum/this.reviews.length,
      'duration' this.duration
    };
  });

TourSchema
  .virtual('reviews')
  .set(function(review){
    this.reviews.push(review);
  });

module.exports = mongoose.model('Tour', TourSchema);