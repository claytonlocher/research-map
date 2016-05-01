
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
      templateUrl: '/shared/directives/geogAppHeader/geogAppHeader.template.html'
    };
  }

})();

