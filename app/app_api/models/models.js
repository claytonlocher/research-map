'use strict';

const mongoose = require('mongoose');


// Each location is "geometry" node of a GeoJSON object
var locationSchema = new mongoose.Schema({
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      lat: Number,
      lng: Number 
    }
  }
});

var projectSchema = new mongoose.Schema({
  netId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    index: true
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
  researchAreas: [String],
  tags: [{
    type: String,
    index: true
  }],
  partners: [String],
  locations: [locationSchema]
});

var researcherSchema = new mongoose.Schema({
  netId: {
    type: String,
    required: true
  },
  name: {
    first: {
      type: String,
      required: true
    },
    middle: String,
    last: {
      type: String,
      required: true
    }
  },
  positions: [{
    title: {
      type: String
    },
    department: {
      type: String
    }
  }],
  email: {
    type: String,
  },
  photoLink: {
    type: String
  },
  profileLink: {
    type: String,
    default: 'https://www.geog.illinois.edu/'
  },
  researchAreas: [String],
  projects: [projectSchema]
});

mongoose.model('Researcher', researcherSchema);
mongoose.model('Project', projectSchema);
