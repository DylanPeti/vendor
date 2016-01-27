'use strict';

/**
 * Module dependencies.
 */

var passport = require('passport');
var path = require('path');
var _ = require('lodash');

var LocalStrategy = require('passport-local').Strategy;
var User = require(path.resolve('./config/models/mongoose.js'));
	

module.exports = function(app, db) {


	// Serialize sessions
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// Deserialize sessions
	passport.deserializeUser(function(id, done) {
		User().findOne({
			_id: id
		}, '-salt -password', function(err, user) {
			done(err, user);
		});
	});

	passport.use(new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password'
		},
		function(email, password, done) {
            console.log('Hey! no more 400 error!');
       
       //find the user
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


	app.use(passport.initialize());
	app.use(passport.session());
};



