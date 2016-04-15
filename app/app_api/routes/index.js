
'use strict';

const express = require('express');
const router = express.Router();

var ctrlResearchers = require('../controllers/researchers');

// Researchers
router.get('/researchers', ctrlResearchers.getAllResearchers);
router.get('/researcher/:netId', ctrlResearchers.getResearcherProfile);
router.post('/researcher', ctrlResearchers.addNewResearcher);


module.exports = router;

