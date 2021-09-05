'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var MaktabSchema = new Schema({
  name:String,
  area:String,
  id:String,
  teacher:
  {
    first_name: {type:String,required:true},
    phone:{type:String},
    provider:
     {
       type:String
     },
    userRole:{
      type:String
    }
  }
});

module.exports = mongoose.model('Maktab', MaktabSchema);
