
(function() {
  'use strict';

  angular.module('geogApp')
    .controller('adminCtrl', adminCtrl);

  adminCtrl.$inject = ['appInfo', 'geogData', '$uibModal'];

  function adminCtrl(appInfo, geogData, $uibModal) {
    var vm = this;

    vm.header = appInfo.header;
    vm.header.pageTitle = 'Admin';

    vm.popupNewResearcherForm = function() {
      var modalInstance = $uibModal.open({
        animation: false,
        controller: 'newResearcherModalCtrl',
        controllerAs: 'vm',
        templateUrl: '/components/admin/newResearcherModal/newResearcherModal.view.html'
      });

      modalInstance.result.then(function(response) {
        console.log('Data received by form:');
        console.log(response.data);
      });

    };

    

  }


})();