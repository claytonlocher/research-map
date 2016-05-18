
'use strict';

const express = require('express');
const router = express.Router();

var ctrlResearchers = require('../controllers/researchers');
var ctrlProjects = require('../controllers/projects');
//var ctrlLocations = requine('../controllers/locations');
var ctrlAuth = require('../controllers/authentication');

// Researchers
router.get('/researchers', ctrlResearchers.getAllResearchers);
router.get('/researcher/:netId', ctrlResearchers.getResearcherProfile);
router.post('/researcher', ctrlResearchers.addNewResearcher);

// Projects
// router.get('/projects', ctrlProjects.???);
router.post('/project', ctrlProjects.addNewProject);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;

