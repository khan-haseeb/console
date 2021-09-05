var Adds = require('./adds.model');
var config = require('../../config/environment');
const { json } = require('body-parser');


exports.uploadImages = function (req, res) {
    var adds = [];
    console.log("req files", req.files);
    for (var i = 0; i < req.files.length; i++) {
      adds.push({
            name : req.files[i].originalname,
            path: 'http://' + config.ip + ':' + config.port + '/' + req.files[i].destination + '/' + req.files[i].originalname,
        })
    }

    Adds.create(adds,function(err,success) {
        if(err) {
          res.send(err);
        }
        res.send(success);
      })
}

exports.create = function (req, res) {
  var adds = [];
  console.log("req body", req.body);
  console.log("req files", req.file);

}

exports.getAdd = function (req, res) {
 Adds.findOne({name : req.query.name}).then(add => {
   if(!add) {
     res.send({msg : 'no add found'});
   }
   res.send(add);
 }) 
}

exports.getAll = function (req, res) {
  Adds.find({}).then(add => {
    if(!add) {
      res.send({msg : 'no add found'});
    }
    res.send(add);
  }) 
 }

