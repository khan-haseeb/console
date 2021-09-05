'use strict';

var express = require('express');
var passport = require('passport');
var config = require('../config/environment');
var User = require('../api/user/user.model');
var MaktabAdmin= require('../api/maktabUserLogin/maktabUser.model');

// Passport Configuration
require('./local/passport').setup(User, config);
require('./local/passport').maktabUserSetup(MaktabAdmin, config);

var router = express.Router();

router.use('/local', require('./local'));

module.exports = router;
