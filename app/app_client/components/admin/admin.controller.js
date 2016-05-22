
(function() {
  'use strict';

  angular.module('geogApp')
    .controller('adminCtrl', adminCtrl);

  adminCtrl.$inject = ['appInfo', 'geogData', '$http', '$uibModal'];

  function adminCtrl(appInfo, geogData, $http, $uibModal) {
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

    vm.popupNewProjectForm = function() {
      var modalInstance = $uibModal.open({
        animation: false,
        controller: 'newProjectModalCtrl',
        controllerAs: 'vm',
        templateUrl: '/components/admin/newProjectModal/newProjectModal.view.html'
      });
      modalInstance.result.then(function(response) {
        console.log('Data received by form:');
        console.log(response.data);
      });
    };

    $http.get('/api/projects').then(function success(response) {
      vm.allProjects = response.data;
    }, function error(response) {
      console.log(response);
    });

  }


})();