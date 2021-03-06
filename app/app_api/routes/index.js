
'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

var ctrlResearchers = require('../controllers/researchers');
var ctrlProjects = require('../controllers/projects');
//var ctrlLocations = require('../controllers/locations');
var ctrlAuth = require('../controllers/authentication');

// Researchers
router.get('/researchers', ctrlResearchers.getAllResearchers);
router.get('/researcher/:netId', ctrlResearchers.getResearcherProfile);
router.post('/researcher', auth, ctrlResearchers.addNewResearcher); // ***Auth***

// Projects
router.get('/projects', ctrlProjects.getAllProjects);
router.post('/project', auth, ctrlProjects.addNewProject); // ***Auth***

// Users
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;

