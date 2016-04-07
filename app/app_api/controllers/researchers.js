
'use strict';

const mongoose = require('mongoose');
const Researcher = mongoose.model('Researcher');

function sendJsonResponse(res, status, content) {
  res.status(status);
  res.json(content);
}

module.exports.getAllResearchers = function(req, res) {
  Researcher.find(function(err, researchers) {
    if (err) {
      console.log(err);
      return;
    }
    sendJsonResponse(res, 200, researchers);
  });
};

module.exports.addNewResearcher = function(req, res) {
  console.log(req.body);
  Researcher.create({
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
  }, function(err, researcher) {
    if (err) {
      console.log(err);
      sendJsonResponse(res, 404, err);
    } else {
      sendJsonResponse(res, 201, researcher);
      console.log('Researcher successfully created!');
      console.log(researcher);
    }
  });
};

module.exports.getResearcherProfile = function(req, res) {
  Researcher
    .findById(req.params.netId)
    .exec(function(err, researcher) {
      if (!researcher) {
        sendJsonResponse(res, 404, {
          "message": "NetID Not Found"
        });
        return;
      } else if (err) {
        sendJsonResponse(res, 404, err);
        return;
      } else {
        sendJsonResponse(res, 200, researcher);
      }
    });

};

