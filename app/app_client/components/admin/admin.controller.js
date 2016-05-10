
(function() {
  'use strict';

  angular.module('geogApp')
    .controller('adminCtrl', adminCtrl);

  adminCtrl.$inject = ['appInfo', 'geogData'];

  function adminCtrl(appInfo, geogData) {
    var vm = this;

    vm.header = appInfo.header;
    vm.header.pageTitle = 'Admin';

    vm.onFormSubmit = function() {
      geogData.newResearcher(vm.formData).then(function success(response) {
        console.log('Success! Added new researcher.');
      }, function error(response) {
        console.log('Error:');
        console.log(response);
      });
      return false;
    };

  }


})();