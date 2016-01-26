// server.js

// modules =================================================

var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var consolidate = require('consolidate')
var swig           = require('swig');

// var methodOverride = require('method-override');

// configuration ===========================================
    
// config files
var db = require('./config/env/all');

// set our port
var port = process.env.PORT || 3000; 


// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'appication/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
// app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users






// routes ==================================================
require('./modules/core/core/server/routes/core.server.routes')(app); // configure our routes

app.use(express.static(__dirname + '/public')); 
app.use(express.static(__dirname + '/modules')); 




app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/modules');

app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });
// NOTE: You should always cache tem

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app; 


