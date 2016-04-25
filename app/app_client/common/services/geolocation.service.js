
'use strict';

angular.module('geogApp')
  .service('geolocation', geolocation);

function geolocation () {
  var getPosition = function(success, error, noGeo) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      noGeo();
    }
  };

  return {
    getPosition: getPosition
  };
  
}

