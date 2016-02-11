'use strict';

module.exports.map = function(req, res) {
	var data = {
		title: 'Geography & GIS Research',
		name: 'Edison',
		people: ['Edison', 'Clayton']
	};
	res.render('index', data);
};

