'use strict';

// Clayton Locher's Mapbox access token
var mapboxAccessToken = 'pk.eyJ1IjoiY2xheXRvbmxvY2hlciIsImEiOiJFWjRDREVnIn0.mB4YLOk9B6Cb4dyMfzqhDA';

var mapboxTileLayer = L.tileLayer(
	'https://api.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={token}', {
		// Determines the style of the map
		mapid: 'mapbox.light',
		token: mapboxAccessToken,
		attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
	});

var map = L.map('map', {
	// Champaign, IL (Main Quad)
	center: [40.107490, -88.227226],
	zoom: 8,
	layers: [mapboxTileLayer]
});


// Admin page
$(function() {
	
	$('#newResearcherForm').on('submit', function(e) {
		e.preventDefault();

		console.log('Form submitted!');
		console.log(e);


	});

});
