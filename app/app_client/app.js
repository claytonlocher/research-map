(function() {
  'use strict';

  angular.module('geogApp', ['ngRoute', 'ngSanitize', 'leaflet-directive', 'ui.bootstrap']);

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/map/map.view.html',
        controller: 'mapCtrl',
        controllerAs: 'vm'
      })
      .when('/researcher/:netId', {
        templateUrl: 'components/researcher/researcher.view.html',
        controller: 'researcherCtrl',
        controllerAs: 'vm'
      })
      .when('/admin', {
        templateUrl: 'components/admin/admin.view.html',
        controller: 'adminCtrl',
        controllerAs: 'vm'
      })
      .when('/generic', {
        templateUrl: 'components/generic/generic.view.html',
        controller: 'genericCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  }

  angular.module('geogApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();

