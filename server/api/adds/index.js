'use strict';


var express = require('express');
var config = require('../../config/environment');
var Adds = require('./adds.model');
var controller = require('./adds.controller');
const multer = require('multer');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({
    storage: storage,
  onFileUploadStart: function (file) {
    console.log(file.originalname + " is starting ...");
  },
});

 var router = express.Router();


router.post('/uploadimages',upload.array('photos'),controller.uploadImages);
router.get('/getadd',controller.getAdd);
router.get('/getall',controller.getAll);

router.post('/',upload.single('image'),controller.create);

  module.exports = router;
