'use strict';

var chai = require('chai');
var should = chai.Should();
var Spot = require('./spot.model');


//   title: {type:String, required:true, validate:titleValidate, trim:true}, // unique within a city
//   city: {type:String, enum: cities},  // name of city or similarly sized localle - like a national park
//   address: String,                    // human-readable: street address, or clear instructions to find
//   photo: String,                      // file name of the canonical photo of the feature
//   description: String,                // what is this spot and why do we want to visit it?
//   action: String,                     // suggestion of a physical interaction to have with the object
//   duration: Number,                   // Median time in minutes spent by other users at this spot
//   reviews: [{ text:String, star:{type:Number,max:5,min:0} }],     // array of opinions
//   tags: [String, enum:tags],          // tags are objective attributes; themese are subjective
//   geo: { lon:{type:Number,min:-180,max:180} , lat:{type:Number,min:-90,max:90} }

var bikeMural = new Spot({
  title: "Duboce Bikeway Mural",
  city: "San Francisco",
  address: "Church St & Duboce Ave",
  photo: 'http://monacaron.com/sites/default/files/styles/gallery/public/DuboceBikewayMural4_MonaCaron.jpg?itok=tgkN3TBw', // FIXME: Get a local copy.
  description:  "Mona Caron's first mural. It celebrates bicycling in the city of San Francisco."+
                "Over a hundred meters in length and five meters tall. "+
                "http://monacaron.com/murals/making-and-unveiling-duboce-bikeway-mural#sthash.uXs9to50.dpuf",
  action: "See if you can identify Mona and the other contributors depicted in the painting.",
  duration: 16.2,
  reviews: [
    { text:"This mural makes me happy.", star:4.5 },
    { text:"This mural puts me into a rage.", star:1.0 }
  ],
  tags: ['public art', 'outdoor', 'castro neighborhood'],
  geo: { lon:-122.428210 , lat:37.769457 }
});

var railwayMural = new Spot({
  title: "Market Street Railway Mural",
  city: "San Francisco",
  address: "300 Church Street",
  photo: 'http://monacaron.com/sites/default/files/styles/bottom_gallery/public/mur-cat-HD-msrm-photo1_0.jpg?itok=Ohzm7urj',
  description:  "A Mona Caron mural depcting San Francisco history from the 1920s to an imagined future.",
  action: "See if you can identify Mona and the other contributors depicted in the painting.",
  duration: 7.2,
  reviews: [{ text:"Great visual history of a great city.", star:4.0 }],
  tags: ['public art', 'outdoor', 'castro neighborhood'],
  geo: { lon:-122.428482 , lat:37.766129 }
});

describe('Spot Model',function(){

  beforeEach(function(done){
    Spot.remove().exec().then(function(){
      done();
    });
  });

  it('should save the data expected',function(done){
    bikeMural.save(function(err, data){
      should.not.exist(err);
      should.exist(data);
      done();
    })
  });

  it('should not save data with title bigger than 50 char',function(done){
    var origRailwayMuralTitle = railwayMural.title;
    // Char meter:       "123456789 123456789 123456789 123456789 123456789 123456789 123456"
    railwayMural.title = "This title is a little too long to be permitted into the database.";
    railwayMural.save(function(err,data){
      should.exist(err);
      done();
    });
    railwayMural.title = origRailwayMuralTitle;
  });

  it('should return the profile when called', function(done){
    railwayMural.save(function(err,data){
      data.profile.should.have.property('title');
      data.profile.should.have.property('address');
      data.profile.should.have.property('description');
      data.profile.should.have.property('rating');
      data.profile.should.have.property('geo'); // TODO: perhaps check inside objects?
      done();
    });
  });

});
