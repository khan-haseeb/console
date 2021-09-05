'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentsSchema = new Schema({
  name: String,
  age:String,
  fathername:String,
  class: String,
  phone:String
});

module.exports = mongoose.model('Student', StudentsSchema);
