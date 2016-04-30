
(function() {
  'use strict';

  angular.module('geogApp')
    .directive('geogAppHeader', geogAppHeader);

  function geogAppHeader() {
    return {
      restrict: 'EA',
      scope: {
        content: '=content'
      },
      templateUrl: '/common/directives/geogAppHeader/geogAppHeader.template.html'
    };
  }

})();

