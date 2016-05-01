
(function() {
  'use strict';

  angular.module('geogApp')
    .factory('appInfo', appInfo)


  function appInfo() {
    return {
      header: {
        siteTitle: 'Geography & GIS Research',
        navigation: [{
          href: '/#admin',
          text: 'Admin'
        }, {
          href: '/#generic',
          text: 'Generic'
        }]
      }
    };
  }



})();