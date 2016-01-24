 // app/routes.js

// grab the user model we just created
var Nerd = require('./models/mongoose');

    module.exports = function(app) {

        app.get('/api/users', function(req, res) {
            // use mongoose to get all users in the database
            User.find(function(err, users) {

                if (err)
                    res.send(err);

                res.json(users); 
            });
        });

        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); //home
        });

    };
