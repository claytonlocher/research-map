
(function() {
  'use strict';

  angular.module('geogApp')
    .controller('newProjectModalCtrl', newProjectModalCtrl);

  newProjectModalCtrl.$inject = ['$uibModalInstance', 'geogData'];

  function newProjectModalCtrl($uibModalInstance, geogData) {
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
      geogData.newProject(vm.formData).then(function success(response) {
        console.log('Success! Added new project.');
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

