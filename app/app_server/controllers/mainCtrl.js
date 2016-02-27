'use strict';

module.exports.map = function(req, res) {
	var data = {
		title: 'Geography & GIS Research',
	};

	res.render('index', data);
};
