var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var addsSchema = new Schema({
  name: {type:String},
  path : String,
  Date : {type : Date, default : Date.now},
  link : String,
  noOfClicks : {type : Number,default : 0}
});

module.exports = mongoose.model('Adds', addsSchema);