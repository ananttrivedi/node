// set up ========================
// var express  = require('express');
// var app      = express();                               // create our app w/ express
// var mongoose = require('mongoose');                     // mongoose for mongodb
// var morgan = require('morgan');             // log requests to the console (express4)
// var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
// var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================

// mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

//mongodb://<user>:<pass>@novus.modulusmongo.net:27017/re8siWix connected with github
var express = require('express');
var router = express.Router();
var app = express();

router.get('/t', function (req, res){
    res.render('todo', {
        title: "Anants Todos",
        items: todoItems
    });
});