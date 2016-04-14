
'use strict';

angular.module('geogApp', [])

  .controller('sidebarCtrl', ['$scope', '$http', function($scope, $http) {
    
    $scope.inputText = 'Filter researchers...';

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


