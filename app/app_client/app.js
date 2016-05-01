(function() {
  'use strict';

  angular.module('geogApp', ['ngRoute', 'leaflet-directive']);

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/map/map.view.html',
        controller: 'mapCtrl',
        controllerAs: 'vm'
      })
      .when('/admin', {
        templateUrl: 'components/admin/admin.view.html',
        controller: 'adminCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  }

  angular.module('geogApp')
    .config(['$routeProvider', '$locationProvider', config])


    // TO DO: Refactor sidebar into directive
    .controller('sidebarCtrl', ['$scope', '$http', function($scope, $http) {
      
      $scope.inputText = 'Filter researchers...';

      // TO DO: Refactor API call into service
      $http.get('http://localhost:3000/api/researchers').then(function success(response) {
        var data = response.data;
        $scope.researchers = data;
        console.log($scope.researchers);
      }, function error(response) {
        console.log(response);
      });

      $scope.getData = function() {
        console.log('Filtered researchers:')
        console.log($scope.filteredResearchers);
      };

    }]);

})();

