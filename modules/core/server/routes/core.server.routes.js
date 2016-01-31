'use strict';

var passport = require('passport');

module.exports = function(app) {
	// Root routing
	var core = require('../controllers/core.server.controller');
	var user = require('../controllers/user.controller');

	// Define error pages
	app.route('/not-found').get(core.renderNotFound);

	// Define application route
	app.route('/').get(core.renderIndex);
	app.route('/welcome').get(core.renderIndex);
	app.route('/signup').get(core.renderIndex);

   // Define User routes
	app.route('/api/auth/signin').post(user.signin);
	app.route('/api/auth/signup').post(user.signup);
	app.route('/api/auth/signout').get(user.signout);


    


};
