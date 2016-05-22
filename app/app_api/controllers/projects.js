
'use strict';

const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const User = mongoose.model('User');

function sendJsonResponse(res, status, content) {
  res.status(status);
  res.json(content);
};

var getResearcherData = function(req, res, callback) {
  if (req.payload && req.payload.netId) {
    User
      .findOne({
        netId: req.payload.netId
      })
      .exec(function(err, user) {
        if (!user) {
          sendJSONResponse(res, 404, {
            "message": "User not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONResponse(res, 404, err);
          return;
        } else {
          callback(req, res, user);
        }
      })
  }
};

module.exports.getAllProjects = function(req, res) {
  Project.find(function(err, projects) {
    if (err) {
      console.log(err);
      return;
    }
    sendJsonResponse(res, 200, projects);
  });
};

module.exports.addNewProject = function(req, res) {
  getResearcherData(req, res, function(req, res, user) {
    Project.create(req.body, function(err, project) {
      if (err) {
        console.log(err);
        sendJsonResponse(res, 404, err);
      } else {
        sendJsonResponse(res, 201, project);
      }
    });
  });



  // getResearcherData(req, res, function(req, res, researcherData) {
  //   // Need to wrap project creation function (start is below)
  //   // in user validation function by getting researcher's permissions 

  //   console.log(req.body);
  //   console.log(req.file);
  //   res.json({success: true});
  //   // Researcher.create(req.body, function(err, researcher) {
  //   //   if (err) {
  //   //     console.log(err);
  //   //     sendJsonResponse(res, 404, err);
  //   //   } else {
  //   //     sendJsonResponse(res, 201, researcher);
  //   //   }
  //   // });
    
  // });

};

