
(function() {
  'use strict';

  angular.module('geogApp')
    .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['appInfo', '$location', 'authentication'];

  function loginCtrl(appInfo, $location, authentication) {
    var vm = this;

    vm.header = appInfo.header;
    vm.header.pageTitle = 'Sign In';

    vm.credentials = {
      netId: '',
      password: ''
    };

    vm.returnPage = $location.search().page || '/';

    vm.onFormSubmit = function() {
      vm.formError = '';

      if (!vm.credentials.netId || !vm.credentials.password) {
        vm.formError = 'All fields required. Please try again.';
        return false;
      } else {
        vm.doLogin();
      }
    };

    vm.doLogin = function() {
      vm.formError = '';
      authentication.login(vm.credentials).then(function success(response) {
        console.log('User ' + response + ' is logged in.');
        $location.search('page', null);
        $location.path(vm.returnPage);
      }, function error(response) {
        console.log(response);
        vm.formError = response;
      });
    };

  }


})();