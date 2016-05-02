
(function() {
  'use strict';

  angular.module('geogApp')
    .directive('sidebar', sidebar);

  function sidebar() {
    return {
      restrict: 'EA',
      scope: {
        content: '=content'
      },
      templateUrl: 'components/map/sidebar/sidebar.template.html'
    };

  }


})();