'use strict';

// Module dependencies
require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer = require('multer');
const passport = require('passport');

require('./app_api/models/db');
require('./app_api/config/passport');

// const routes = require('./app_server/routes/index');
const routesApi = require('./app_api/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'dist', 'img', 'favicon.ico')));
app.use(logger('dev'));
app.use(multer({dest: './uploads/'}).single('spatialData'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public', 'dist')));
app.use('/', express.static(path.join(__dirname, 'app_client')));

// Initialize Passport after static middleware and before auth route handlers
app.use(passport.initialize());

// Serve up test GeoJSON data
app.use('/data', express.static(path.join(__dirname, 'test_data')));

// app.use('/', routes);
app.use('/api', routesApi);

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handlers

// Development error handler
// Will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler
// No stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
