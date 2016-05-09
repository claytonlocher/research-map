
(function() {
  'use strict';

  angular.module('geogApp')
    .controller('mapCtrl', mapCtrl);

  mapCtrl.$inject = ['$scope', '$http', 'appInfo', 'geolocation', 'geogData'];

  function mapCtrl($scope, $http, appInfo, geolocation, geogData) {
    var vm = this;

    vm.header = appInfo.header;
    vm.header.pageTitle = '';
    
    vm.researchers = {};

    geogData.getResearchers().then(function success(data) {
      vm.researchers.all = vm.researchers.filtered = data;
    }, function error(response) {
      console.log(response);
    });

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

    vm.map = {};

    vm.map.tiles = mapboxTiles;

    vm.map.currentHover = {};


    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: function() {
          // console.log('Feature info:');
          // console.log(feature);
          vm.map.currentHover = feature;
          layer.setStyle({
            fillColor: 'red'
          });
        },
        mouseout: function() {
          vm.map.currentHover = {};
          layer.setStyle(layer.defaultOptions.style);
        },
        click: function() { 
          // console.log('Layer info:');
          // console.log(layer);
          
        }
      })
    }


    vm.map.layers = {};

    $http.get('/data/champaign_co_census_blocks.json').then(function success(response) {
        console.log(response.data);
        vm.map.layers.overlays = {
          champaign_co: {
            name: 'Champaign County, IL Census Blocks',
            type: 'geoJSONShape',
            visible: true,
            data: response.data,
            layerOptions: {
              style: {
                weight: 3,
                fillColor: 'blue',
              },
              onEachFeature: onEachFeature
            }
          }
        };
      }, function error(response) {
        console.log(response);
      });


    // $scope.eventDetected = "No events yet...";

    // var mapEvents = leafletMapEvents.getAvailableMapEvents();
    // console.log(mapEvents);

    // for (var k in mapEvents){
    //   var eventName = 'leafletDirectiveMap.map.' + mapEvents[k];
    //   console.log(eventName);
    //   $scope.$on(eventName, function(event){
    //     console.log('Manual event detected!');
    //     $scope.eventDetected = event.name;
    //   });
    // }


    // $scope.$on('leafletDirectiveMap.geojsonMouseover', function(event, leafletEvent) {
    //   console.log('Click on GeoJSON detected!');
    //   console.log(leafletEvent);
    // });

    

    vm.map.center = {
      // Champaign, IL (Main Quad)
      lat: 40.107490,
      lng: -88.227226,
      zoom: 9
    };

    vm.geolocationSuccess = function(position) {
      console.log('Success! We found your location.');
      $scope.$apply(function() {
        vm.map.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          zoom: 10
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

