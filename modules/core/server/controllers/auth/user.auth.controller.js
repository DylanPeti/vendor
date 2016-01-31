'use strict';

/**
 * Module dependencies.
 */
var path = require('path');
var errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
var	mongoose = require('mongoose');
var	passport = require('passport');
var appDir = path.dirname(require.main.filename);
var User = require(appDir + '/config/models/mongoose');


/**
 * Signin after passport authentication
 */

/**
 * Signup
 */
exports.signup = function(req, res) {
	// For security measurement we remove the roles from the req.body object
	console.log(req.body);
	delete req.body.roles;

	// Init Variables
	var user = new User(req.body);
	var message = null;

	// Add missing user fields
	user.provider = 'local';
	user.displayName = user.email;

	// Then save the user
	user.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			// Remove sensitive data before login
			user.password = undefined;
			user.salt = undefined;

			req.login(user, function(err) {
				if (err) {
					res.status(400).send(err);
				} else {
					res.json(user);
				}
			});
		}
	});
};

exports.signin = function(req, res, next) {

	passport.authenticate('local', function(err, user, info) {

		if (err || !user) {
			res.status(400).send(info);
		} else {
			// Remove sensitive data before login
			user.password = undefined;
			user.salt = undefined;

			req.login(user, function(err) {
				if (err) {
					res.status(400).send(err);
				} else {
					res.json(user);
				}
			});
		}
	})(req, res, next);
};

/**
 * Signout
 */
exports.signout = function(req, res) {
	req.logout();
	res.redirect('/');
};
