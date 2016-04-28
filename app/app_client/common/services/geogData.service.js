
(function() {
  'use strict';

  angular.module('geogApp')
    .service('geogData', geogData);

  geogData.$inject = ['$http'];

  function geogData($http) {
    var test = function() {
      return 'Data was received from the geogData service';
    };

    return {
      test: test
    };
  }

})();

