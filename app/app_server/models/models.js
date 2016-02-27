
'use strict';

const mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
  // Define schema for locations here
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  }


});

mongoose.model(locationSchema);
