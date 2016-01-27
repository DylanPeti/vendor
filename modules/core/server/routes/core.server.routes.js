'use strict';

var passport = require('passport');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app) {
	// Root routing
	var core = require('../controllers/core.server.controller');
	var user = require('../controllers/user.controller');

	// Define error pages
	app.route('/server-error').get(core.renderServerError);
	app.route('/not-found').get(core.renderNotFound);

	// Define application route
	app.route('/').get(core.renderIndex);
	app.route('/home').get(core.renderIndex);

	app.route('/api/auth/signin').post(user.signin);
};
