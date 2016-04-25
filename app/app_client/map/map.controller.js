
'use strict';

angular.module('geogApp')

  .controller('mapCtrl', [function mapCtrl() {
    // View model definition to replace $scope
    var vm = this;

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

    vm.center = {
      // Champaign, IL (Main Quad)
      lat: 40.107490,
      lng: -88.227226,
      zoom: 8
    };

    vm.tiles = mapboxTiles;

  }]);

