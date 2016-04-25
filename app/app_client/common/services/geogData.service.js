
'use strict';

angular.module('geogApp')
  .service('geogData', geogData);

function geogData($http) {
  var test = function() {
    return 'Data was received';
  };

  return {
    test: test
  };
}

