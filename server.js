// server.js


var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var consolidate = require('consolidate')
var swig           = require('swig');

var db = require('./config/env/all');


var port = process.env.PORT || 3000; 

app.use(bodyParser.json()); 


app.use(bodyParser.json({ type: 'appication/vnd.api+json' })); 


app.use(bodyParser.urlencoded({ extended: true })); 

require('./modules/core/server/routes/core.server.routes')(app); // configure our routes

app.use(express.static(__dirname + '/public')); 
app.use(express.static(__dirname + '/modules')); 




app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/modules');

//cache in production
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.listen(port);               

                    
console.log('Turn me on hot fire ' + port);

    
exports = module.exports = app; 


