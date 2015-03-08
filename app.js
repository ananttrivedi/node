var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// configure app 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middle wares.
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// define routes.
app.use(require('./todos'));
app.use(require('./si'));

//start server
app.listen(1337, function()
{
	console.log('ready on port 1337');
});