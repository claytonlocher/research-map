
(function() {
  'use strict';

  angular.module('geogApp')
    .controller('adminCtrl', adminCtrl);

  adminCtrl.$inject = ['appInfo'];

  function adminCtrl(appInfo) {
    var vm = this;

    vm.header = appInfo.header;
    vm.header.pageTitle = 'Admin';

  }


})();