'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');


/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
  return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * A Validation function for local strategy password
 */
var validateLocalStrategyPassword = function(password) {
  return (this.provider !== 'local' || (password && password.length > 6));
};


// create a schema
var userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please fill in your name',
    default: '',
  },
  email: {
    type: String,
    trim: true,
    unique: 'This email already has been registered',
    required: 'Please fill in a email',
    default: '',
    validate: [validateLocalStrategyProperty, 'Please fill in your email'],
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  provider: {
    type: String,
    required: 'Provider is required'
  },
  password: {
    type: String,
    default: '',
    validate: [validateLocalStrategyPassword, 'Password should be longer']
  },
  salt: {
    type: String
  },
  created_at: Date,
  updated_at: Date
});



userSchema.pre('save', function(next) {
  if (this.password && this.password.length > 6) {
    this.salt = crypto.randomBytes(16).toString('base64');
    this.password = this.hashPassword(this.password);
  }

  next();
});




/**
 * Create instance method for hashing a password
 */
userSchema.methods.hashPassword = function(password) {
  if (this.salt && password) {
    return crypto.pbkdf2Sync(password, new Buffer(this.salt, 'base64'), 10000, 64).toString('base64');
  } else {
    return password;
  }
};


userSchema.methods.authenticate = function(password) {
  return this.password === this.hashPassword(password);
};




var User = mongoose.model('User', userSchema);

module.exports = User;

