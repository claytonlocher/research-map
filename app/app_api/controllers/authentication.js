
'use strict';

const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

var sendJSONResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {
  if (!req.body.netId || req.body.password) {
    sendJSONResponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  var user = new User();
  user.netId = req.body.netId;
  user.setPassword(req.body.password);
  
  user.save(function(err) {
    var token;
    if (err) {
      sendJSONResponse(res, 404, err);
    } else {
      token = user.generateJwt();
      sendJSONResponse(res, 200, {
        "token": token
      });
    }
  });

};

module.exports.login = function(req, res) {
  if (!req.body.netId || req.body.password) {
    sendJSONResponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  passport.authenticate('local', function(err, user, info) {
    var token;

    if (err) {
      sendJSONResponse(res, 404, err);
      return;
    }

    if (user) {
      token = user.generateJwt();
      sendJSONRepsonse(res, 200, {
        "token": token
      });
    } else {
      sendJSONResponse(res, 401, info);
    }

  })(req, res);

};

