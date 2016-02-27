'use strict';

const mongoose = require('mongoose');


// Each location is "geometry" node of a GeoJSON object
var locationSchema = new mongoose.Schema({
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number]
  }
});

var projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String
  },
  projectLink: {
    type: String
  },
  fullText: {
    type: String
  },
  tags: {
    type: Array
  },
  partners: [researcherSchema]
  locations: [locationSchema]
});

var researcherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  photoLink: {
    type: String
  }
  profileLink: {
    type: String,
    default: 
  },
  researchAreas: {
    type: Array
  },
  projects: [projectSchema]
});

mongoose.model(researcherSchema);
