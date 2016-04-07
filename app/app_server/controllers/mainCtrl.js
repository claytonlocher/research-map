
'use strict';

const request = require('request');

function getAllLocations(req, res, callback) {
	var data = {
		siteTitle: 'Geography & GIS Research',
    pageTitle: ''
	};

  var reqOptions = {
    url: 'http://localhost:3000/api/researchers',
    method: 'GET',
    json: {}
  };

  request(reqOptions, function(err, res, body) {
    if (err) {
      console.log(err);
      res.render('error', err);
    } else {
      data.researchers = body;
      callback(data);
    }
  });

}

module.exports.map = function(req, res) {
  getAllLocations(req, res, function(data) {
    res.render('index', data);
  });
};

module.exports.admin = function(req, res) {
  var data = {
    siteTitle: 'Geography & GIS Research',
    pageTitle: 'Admin'
  };

  res.render('admin', data);

};

module.exports.doAddResearcher = function(req, res, callback) {
  var postData = {
    netId: req.body.netId,
    name: {
      first: req.body.firstName,
      middle: req.body.middleName,
      last: req.body.lastName
    },
    positions: [{
      title: req.body.positionTitle,
      department: req.body.positionDepartment
    }],
    email: req.body.email,
    photoLink: req.body.photoLink,
    profileLink: req.body.profileLink,
    researchAreas: [],
    projects: []
  };

  console.log('Post data recevied by the server:');
  console.log(postData);

  var reqOptions = {
    url: 'http://localhost:3000/api/researcher',
    method: 'POST',
    json: postData
  };
  request(reqOptions, function(err, res, body) {
    if (err) {
      console.log(err);
      res.render('error', err);
    }
    console.log('New researcher added successfully!');
    res.redirect('/', {
      "message": "New researcher added successfully!"
    });
  });
};

