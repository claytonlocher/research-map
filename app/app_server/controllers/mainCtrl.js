'use strict';

module.exports.map = function(req, res) {
	var data = {
		siteTitle: 'Geography & GIS Research',
    pageTitle: ''
	};

	res.render('index', data);
};

module.exports.admin = function(req, res) {
  var data = {
    siteTitle: 'Geography & GIS Research',
    pageTitle: 'Admin'
  };

  res.render('admin', data);

};
