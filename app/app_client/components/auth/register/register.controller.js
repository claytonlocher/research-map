
(function() {
  'use strict';

  angular.module('geogApp')
    .controller('registerCtrl', registerCtrl);

  registerCtrl.$inject = ['appInfo', '$location', 'authentication'];

  function registerCtrl(appInfo, $location, authentication) {
    var vm = this;

    vm.header = appInfo.header;
    vm.header.pageTitle = 'Register';

    vm.credentials = {
      netId: '',
      password: '',
      passwordConfirm: ''
    };

    vm.returnPage = $location.search().page || '/';

    vm.onFormSubmit = function() {
      vm.formError = '';

      if (!vm.credentials.netId || !vm.credentials.password || !vm.credentials.passwordConfirm) {
        vm.formError = 'All fields required. Please try again.';
        return false;
      } else {
        vm.doRegister();
      }
    };

    vm.doRegister = function() {
      vm.formError = '';
      authentication.register(vm.credentials).then(function success(response) {
        console.log('Registered new user: ' + response);
        $location.search('page', null);
        $location.path(vm.returnPage);
      }, function error(response) {
        console.log(response);
        vm.formError = response;
      });
    };

  }


})();