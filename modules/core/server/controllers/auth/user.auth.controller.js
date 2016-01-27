'use strict';

/**
 * Module dependencies.
 */
var path = require('path');
var	errorHandler = require(path.resolve(__dirname + '/../error.server.controller'));
var	mongoose = require('mongoose');
var	passport = require('passport');
var appDir = path.dirname(require.main.filename);
var User = require(appDir + '/config/models/mongoose');


/**
 * Signin after passport authentication
 */
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
