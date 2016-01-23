'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/mainCtrl');

// GET home page.
router.get('/', ctrl.map);

module.exports = router;
