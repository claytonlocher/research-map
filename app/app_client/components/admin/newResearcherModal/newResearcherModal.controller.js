
(function() {
  'use strict';

  angular.module('geogApp')
    .controller('newResearcherModalCtrl', newResearcherModalCtrl);

  newResearcherModalCtrl.$inject = ['$uibModalInstance', 'geogData'];

  function newResearcherModalCtrl($uibModalInstance, geogData) {
    var vm = this;

    vm.modal = {
      cancel: function() {
        $uibModalInstance.dismiss('cancel');
      },
      close: function(result) {
        $uibModalInstance.close(result);
      }
    };

    vm.onFormSubmit = function() {
      geogData.newResearcher(vm.formData).then(function success(response) {
        console.log('Success! Added new researcher.');
        vm.modal.close(response);
        return false;
      }, function error(response) {
        console.log('Error:');
        console.log(response);
        return false;
      });
    };


  }

})();

