
'use strict';

const mongoose = require('mongoose');

// Read in credentials to access MongoDB database on mLab
var dbUSER = process.env.dbUSER;
var dbPASSWORD = process.env.dbPASSWORD;
var dbURI = 'mongodb://' + dbUSER + ':' + dbPASSWORD + '@ds017862.mlab.com:17862/ggis';

if (dbUSER && dbPASSWORD) {
  mongoose.connect(dbURI);
} else {
  console.log('No database credentials detected.');
}

// If running on Windows, add SIGINT listener with readline here
var db = mongoose.connection;

db.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

db.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Close the database connection before app shuts down
var gracefulShutdown = (msg, callback) => {
  db.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// Listen for nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// Listen for app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

// Listen for Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app termination', () => {
    process.exit(0);
  });
});

require('./models');
