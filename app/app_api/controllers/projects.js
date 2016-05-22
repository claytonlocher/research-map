
'use strict';

const mongoose = require('mongoose');
const Project = mongoose.model('Project');

function sendJsonResponse(res, status, content) {
  res.status(status);
  res.json(content);
};

// methods
module.exports.getAllProjects = function(req, res) {
  Project.find(function(err, projects) {
    if (err) {
      console.log(err);
      return;
    }
    sendJsonResponse(res, 200, projects);
  });
};

// module.exports.getResearcherProfile = function(req, res) {
//   Researcher
//     .findById(req.params.netId)
//     .exec(function(err, researcher) {
//       if (!researcher) {
//         sendJsonResponse(res, 404, {
//           "message": "NetID Not Found"
//         });
//         return;
//       } else if (err) {
//         sendJsonResponse(res, 404, err);
//         return;
//       } else {
//         sendJsonResponse(res, 200, researcher);
//       }
//     });
// };

module.exports.addNewProject = function(req, res) {

  Project.create(req.body, function(err, project) {
    if (err) {
      console.log(err);
      sendJsonResponse(res, 404, err);
    } else {
      sendJsonResponse(res, 201, project);
    }
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

