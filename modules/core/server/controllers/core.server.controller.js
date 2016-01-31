'use strict';

/**
 * Render the main applicaion page
 */
exports.renderIndex = function(req, res) {
	 res.render('index');
};


/**
 * Render the server error page
 */

exports.renderServerError = function(req, res) {
	res.status(500).render('core/server/views/404', {
		error: 'Oops! Something went wrong...'
	});
};

/**
 * Render the server not found page
 */

exports.renderNotFound = function(req, res) {
	res.status(404).render('core/server/views/404', {
		url: req.originalUrl
	});
};
