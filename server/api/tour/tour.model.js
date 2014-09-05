'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    validate = require('mongoose-validator'),
    User = require('../user/user.model.js'),
    uniqueValidator = require('mongoose-unique-validator');

var titleValidate = [
  validate({
    validator: 'isLength',
    arguments: [0,50],
    message: 'title should be less than 50 characters'
  })
];

// var cities = 'San Francisco,New York,Los Angelous'.split(',');
var themes = 'Romantic,Athletic,Ourdoor,Nature,Art,Music,Food,Social,Solitary,Adventure,Urban,Daytime,Nighttime'.split(',');
// var durations = 'More than a day,All day,Most of the day,Half day,Around an hour'.split(',');
var costs = '$,$$,$$$,$$$$'.split(',');

var TourSchema = new Schema({
  title: {type:String, unique:true, required:true, validate:titleValidate, trim:true},
  author: {type: Schema.ObjectId, ref: User},
  description: String,
  reviews: [{body: String, rating: {type:Number, max:5, min:0}, reviewer: {type: Schema.ObjectId, ref: User}}],
  city: String,
  duration: {type: String},
  theme: [{type:String, enum: themes}],
  neighborhood: [String],
  cost: {type: String, enum: costs},
  createdAt: {type: Date, default: Date.now()},
  spots: [{
    // tags:[String],
    free: Boolean,
    paid: Boolean,
    indoors: Boolean,
    outdoors: Boolean,
    photo: Boolean,
    adventure: Boolean,
    food: Boolean,
    drink: Boolean,
    task: String,
    address: String,
    points: String,
    imgurl: String
  }]
});

TourSchema
  .virtual('profile')
  .get(function(){
    var sum = 0;
    for(var i = 0; i < this.reviews.length; i++){
      sum += this.reviews[i].rating;
    }

    return{
      'title': this.title,
      'author': this.author,
      'description': this.description,
      'rating': sum/this.reviews.length,
      'duration': this.duration
    };
  });

TourSchema.method('findAuthor',function(callback){
  return this.db.model('User').findById(this.author,callback);
});

// TourSchema.method('addReviews',function(review,cb){
//   this.reviews.push(review);
//   console.log('********',this.reviews);
//   this.save(function(err,data){
//     console.log('---------',err);
//     console.log('++++++++',data);
//     cb(err,data);
//   });
// });

// TourSchema.method('addSpot',function(spot){
//   this.spots.push(spot._id);
// });
// TourSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Tour', TourSchema);
