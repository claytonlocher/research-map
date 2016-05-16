
'use strict';

const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
  netId: {
    type: String,
    unique: true,
    required: true
  },
  hash: String,
  salt: String
});

userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  console.log('Salt: ' + this.salt);
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    netId: this.netId,
    exp: parseInt(expiry.getTime() / 1000)
  }, process.env.JWT_SECRET);
};


mongoose.model('User', userSchema);

