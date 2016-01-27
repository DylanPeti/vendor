// server.js


var express        = require('express');
var express_session = require('express-session');
var passport        = require('passport');
var app            = express();
var cookie_parser  = require('cookie-parser')();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var consolidate = require('consolidate');
var LocalStrategy = require('passport-local').Strategy;
var swig           = require('swig');
var User           = require('./config/models/mongoose');




var db = require('./config/env/all');


var port = process.env.PORT || 3000; 



app.use(bodyParser.urlencoded({ extended: true }) );
app.use(bodyParser.json());
	// Add passport's middleware






// app.use(bodyParser.urlencoded({ extended: false })); 


mongoose.connect('mongodb://localhost/vendor');

// app.use(express_session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

require('./modules/core/server/config/users.config.js')(app);
// require('./modules/core/server/config/strategies/local.js')(app);
require('./modules/core/server/routes/core.server.routes')(app); 

app.use(express.static(__dirname + '/public')); 
app.use(express.static(__dirname + '/modules')); 




// var newUser = User({
//   name: 'Dylan',
//   email: 'dylan@gomomentum.marketing',
//   password: 'theclub01',
//   provider: 'local'
// });

// newUser.save(function(err) {
//   if (err) throw err;
//   console.log('User created!');
// });


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/modules');

//cache in production
app.set('view cache', false);
swig.setDefaults({ cache: false });


app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app


