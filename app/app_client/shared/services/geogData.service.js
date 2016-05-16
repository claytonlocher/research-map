
(function() {
  'use strict';

  angular.module('geogApp')
    .factory('geogData', geogData);

  geogData.$inject = ['$http', '$q'];

  function geogData($http, $q) {

    var getResearchers = function() {
      var defer = $q.defer();

      $http.get('/api/researchers').then(function success(response) {
        var data = response.data;
        defer.resolve(data);
      }, function error(response) {
        defer.reject(response);
        console.log(response);
      });
      return defer.promise;
    };

    var newResearcher = function(data) {
      var defer = $q.defer();

      var postData = {
        netId: data.netId,
        name: {
          first: data.firstName,
          middle: data.middleName,
          last: data.lastName
        },
        positions: [{
          title: data.positionTitle,
          department: data.positionDepartment
        }],
        email: data.email,
        photoLink: data.photoLink,
        profileLink: data.profileLink,
        researchAreas: [],
        projects: []
      };

      var areas = Object.keys(data.researchAreas);
      for (var i=0; i < areas.length; i++) {
        if (data.researchAreas[areas[i]]) {
          postData.researchAreas.push(areas[i]);
        }
      }

      $http.post('/api/researcher', postData).then(function success(response) {
        defer.resolve(response);
      }, function error(response) {
        console.log(response);
        defer.reject(response);
      });
      return defer.promise;
    };

    var newProject = function(data) {
      var defer = $q.defer();

      var fd = new FormData();
      
      for (var key in data) {
        fd.append(key, data[key]);
      }

      var postData = fd;

      // var postData = {
      //   netId: data.netId,
      //   name: {
      //     first: data.firstName,
      //     middle: data.middleName,
      //     last: data.lastName
      //   },
      //   positions: [{
      //     title: data.positionTitle,
      //     department: data.positionDepartment
      //   }],
      //   email: data.email,
      //   photoLink: data.photoLink,
      //   profileLink: data.profileLink,
      //   researchAreas: [],
      //   projects: []
      // };

      $http.post('/api/project', postData, {
        transformRequest: angular.identity,
        headers: {
          'Content-Type': undefined
        }
      }).then(function success(response) {
        defer.resolve(response);
      }, function error(response) {
        console.log(response);
        defer.reject(response);
      });
      return defer.promise;
    };

    return {
      getResearchers: getResearchers,
      newResearcher: newResearcher,
      newProject: newProject
    };
  }

})();

