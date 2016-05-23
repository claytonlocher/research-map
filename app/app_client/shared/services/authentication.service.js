
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
        saveToken(response.data.token);
        defer.resolve(response.config.data.netId);
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
        defer.resolve(response.config.data.netId);
      }, function error(response) {
        console.log(response);
        defer.reject(response);
      });

      return defer.promise;
    };

    var logout = function() {
      $window.localStorage.removeItem('geogApp-token');
    };

    var isLoggedIn = function() {
      var token = getToken();

      if (token) {
        // Gets and decodes the payload from the token stored in localStorage
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

    var currentUser = function() {
      if (isLoggedIn()) {
        var token = getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        return {
          netId: payload.netId
        };
      }
    };

    return {
      saveToken: saveToken,
      getToken: getToken,
      register: register,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn
    };

  }


})();