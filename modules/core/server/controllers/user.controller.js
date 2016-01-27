'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');

/**
 * Extend user's controller
 */
module.exports = _.extend(
	require(__dirname + '/auth/user.auth.controller')
	// require('./users/users.authorization.server.controller'),
	// require('./users/users.password.server.controller'),
	// require('./users/users.profile.server.controller')
);
