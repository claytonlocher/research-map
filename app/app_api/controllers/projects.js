
'use strict';

const mongoose = require('mongoose');
const project = mongoose.model('Project');

function sendJsonResponse(res, status, content) {
  res.status(status);
  res.json(content);
};

// methods
module.exports.getAllProjects = function(req, res) {
  project.find(function(err, projects) {
    if (err) {
      console.log(err);
      return;
    }
    sendJsonResponse(res, 200, projects);
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

module.exports.addNewProject = function(req, res) {
  console.log(req.body);
  console.log(req.file);
  res.json({success: true});
  // Researcher.create(req.body, function(err, researcher) {
  //   if (err) {
  //     console.log(err);
  //     sendJsonResponse(res, 404, err);
  //   } else {
  //     sendJsonResponse(res, 201, researcher);
  //   }
  // });
};

