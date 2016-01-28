/**
 * Mo modules
 */

var path = require('path');
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

// most important part of auth. Body parser only JSON and urlencoded data

app.use(bodyParser.urlencoded({ extended: true }) );

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/vendor');

//Set up passport auth localstrategy
require('./modules/core/server/config/users.config.js')(app);

//Routes 
require('./modules/core/server/routes/core.server.routes')(app); 

app.use(express.static(__dirname + '/public')); 
app.use(express.static(__dirname + '/modules')); 

app.use(function(req, res, next){
        res.status(404);
        if (req.accepts('html')) {
         res.render(path.resolve('modules/index'), { url: '/' });
       return;
       }
         // default to plain-text. send()
        res.type('txt').send('Not found');
});


// Use swig as the templating engine

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/modules');

// Cache for production
app.set('view cache', false);
swig.setDefaults({ cache: false });


app.listen(port);	
console.log('Dylan Peti is Hot fire!!' + port); 		
exports = module.exports = app; 						


