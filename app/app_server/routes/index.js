'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/mainCtrl');

// GET home page.
router.get('/', ctrl.map);

// GET admin page
router.get('/admin', ctrl.admin);
router.post('/admin/new', ctrl.doAddResearcher);

module.exports = router;
