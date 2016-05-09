
'use strict';

const mongoose = require('mongoose');
const Researcher = mongoose.model('Researcher');
// const Project = mongoose.model('Project');

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
  Researcher.create(req.body, function(err, researcher) {
    if (err) {
      console.log(err);
      sendJsonResponse(res, 404, err);
    } else {
      sendJsonResponse(res, 201, researcher);
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

