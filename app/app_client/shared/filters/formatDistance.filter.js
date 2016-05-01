
(function() {
  'use strict';

  angular.module('geogApp')
    .filter('formatDistance', formatDistance);

  var isNumeric = function (n) {
    return !isNaN(parseFloat(n) && isFinite(n));
  };

  function formatDistance () {
    return function(distance) {
      var numDistance, unit;
      // TO DO: Process and return formatted distance
    };
  }

})();

