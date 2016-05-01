
(function() {
  'use strict';

  angular.module('geogApp')
    .filter('addHtmlLineBreaks', addHtmlLineBreaks);

  function addHtmlLineBreaks() {
    return function(text) {
      var output = text.replace(/(\r\n|\n|\r)/g, '<br/>');
      return output;
    };
  }

})();