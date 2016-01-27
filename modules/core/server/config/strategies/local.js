'use strict';

/**
 * Module dependencies.
 */

var passport = require('passport');
var path = require('path');
var LocalStrategy = require('passport-local').Strategy;
var User = require(path.resolve('./config/models/mongoose.js'));
	// console.log(path);

module.exports = function() {
	// Use local strategy
	passport.use(new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password'
		},
		function(email, password, done) {
			User.findOne({
				email: email
			}, function(err, user) {
				if (err) {
					return done(err);
				}
				if (!user) {
					return done(null, false, {
						message: 'Unknown email'
					});
				}
				if (!user.authenticate(password)) {
					return done(null, false, {
						message: 'Invalid password'
					});
				}

				return done(null, user);
			});
		}
	));
};

