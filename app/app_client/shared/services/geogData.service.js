
(function() {
  'use strict';

  angular.module('geogApp')
    .factory('geogData', geogData);

  geogData.$inject = ['$http', '$q'];

  function geogData($http, $q) {

    var getResearchers = function() {
      var defer = $q.defer();

      $http.get('http://localhost:3000/api/researchers').then(function success(response) {
        var data = response.data;
        defer.resolve(data);
      }, function error(response) {
        defer.reject(response);
        console.log(response);
      });
      return defer.promise;
    };

    return {
      getResearchers: getResearchers
    };
  }

})();

