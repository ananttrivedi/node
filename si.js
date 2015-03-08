var express = require('express');
var router = express.Router();
var app = express();

router.get('/t', function (req, res){
    res.render('todo', {
        title: "Anants Todos",
        items: todoItems
    });
});