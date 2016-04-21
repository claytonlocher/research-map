
'use strict';

angular.module('geogApp', ['leaflet-directive'])

  .controller('mapCtrl', ['$scope', function($scope) {

    var mapboxAccessToken = 'pk.eyJ1IjoiY2xheXRvbmxvY2hlciIsImEiOiJFWjRDREVnIn0.mB4YLOk9B6Cb4dyMfzqhDA';

    var mapboxTiles = {
      name: 'Mapbox Light',
      url: 'https://api.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
      type: 'xyz',
      options: {
        mapid: 'mapbox.light',
        apikey: mapboxAccessToken,
        attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
      }
    };

    $scope.center = {
      // Champaign, IL (Main Quad)
      lat: 40.107490,
      lng: -88.227226,
      zoom: 8
    };

    $scope.tiles = mapboxTiles;

  }])
  
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


