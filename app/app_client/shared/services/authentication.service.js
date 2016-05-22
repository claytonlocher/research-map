
(function() {
  'use strict';

  angular.module('geogApp')
    .factory('authentication', authentication);

  authentication.$inject = ['$window', '$http', '$q'];

  function authentication($window, $http, $q) {
    
    var saveToken = function(token) {
      $window.localStorage['geogApp-token'] = token;
    };

    var getToken = function() {
      return $window.localStorage['geogApp-token'];
    };

    var register = function(user) {
      var defer = $q.defer();

      $http.post('/api/register', user).then(function success(response) {
        saveToken(response.token);
        defer.resolve();
        // defer.resolve(response.token);
      }, function error(response) {
        console.log(response);
        defer.reject(response);
      });

      return defer.promise;
    };

    var login = function(user) {
      var defer = $q.defer();

      $http.post('/api/login', user).then(function success(response) {
        saveToken(response.token);
        defer.resolve();
        // defer.resolve(response.token);
      }, function error(response) {
        console.log(response);
        defer.reject(response);
      });

      return defer.promise;
    };

    var logout = function() {
      $window.localStorage.removeItem('geogApp-token');
    };

    return {
      saveToken: saveToken,
      getToken: getToken,
      register: register,
      login: login,
      logout: logout
    };

  }


})();