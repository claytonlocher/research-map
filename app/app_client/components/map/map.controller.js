
(function() {
  'use strict';

  angular.module('geogApp')
    .controller('mapCtrl', mapCtrl);

  mapCtrl.$inject = ['$scope', 'appInfo', 'geolocation', 'geogData'];

  function mapCtrl($scope, appInfo, geolocation, geogData) {
    var vm = this;

    vm.header = appInfo.header;
    vm.header.pageTitle = '';

    // vm.message = geogData.test();
    // console.log(vm.message);

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

    vm.tiles = mapboxTiles;

    vm.center = {
      // Champaign, IL (Main Quad)
      lat: 40.107490,
      lng: -88.227226,
      zoom: 9
    };


    vm.geolocationSuccess = function(position) {
      console.log('Success! We found your location.');
      $scope.$apply(function() {
        vm.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          zoom: 6
        };
      });
    };

    vm.geolocationError = function(error) {
      $scope.$apply(function() {
        vm.message = error.message;
      });
    };

    vm.noGeolocation = function() {
      $scope.$apply(function() {
        vm.message = 'Sorry, but geolocation is not supported by this browser :(';
      });
    };

    geolocation.getPosition(vm.geolocationSuccess, vm.geolocationError, vm.noGeolocation);

  }


})();

