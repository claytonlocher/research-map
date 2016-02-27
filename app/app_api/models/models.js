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
  // For input array [firstName, lastName]
  name: {
    type: Array,
    required: true
  },
  titles: [String],
  email: {
    type: String,
  },
  photoLink: {
    type: String
  }
  profileLink: {
    type: String,
    default: 'https://www.geog.illinois.edu/'
  },
  researchAreas: [String],
  projects: [projectSchema]
});

mongoose.model(researcherSchema);


