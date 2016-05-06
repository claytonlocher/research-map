
(function() {
  'use strict';

  angular.module('geogApp')
    .directive('sidebar', sidebar);

  function sidebar() {
    
    var sidebarCtrl = function sidebarCtrl() {
      var vm = this;

      vm.inputText = 'Filter researchers...';

      vm.getData = function() {
        console.log('Filtered researchers:');
        console.log(vm.researchers.filtered);
      };

    };

    return {
      restrict: 'E',
      scope: {
        researchers: '=researchers'
      },
      bindToController: true,
      controller: sidebarCtrl,
      controllerAs: 'vm',
      templateUrl: 'components/map/sidebar/sidebar.template.html'
    };

  }


})();