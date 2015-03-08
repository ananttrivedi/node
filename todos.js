var express = require('express');
var router = express.Router();
var app = express();


var todoItems = [
		{id: 23, desc: 'foo'},
		{id: 283, desc: 'fosdo'},
		{id: 237, desc: 'fosdfso'},
		{id: 263, desc: 'ffgoo'},
		{id: 2633, desc: 'fghfoo'},
		{id: 234, desc: 'fofgho'},
		{id: 23, desc: 'fogfho'},
		{id: 2334, desc: 'ffghoo'},
		{id: 23, desc: 'fofgo'}
		];

// routes
router.get('/', function (req, res){
	console.log(app);
	res.render('index', {
		title: "My App Anant",
		items: todoItems
	});
});

//mongodb://<user>:<pass>@novus.modulusmongo.net:27017/re8siWix connected with github
router.get('/todo', function (req, res){
	res.render('todo', {
		title: "Anants Todos",
		items: todoItems
	});
});

router.post('/add', function (req, res) {
	var newItem = req.body.newItem;
	todoItems.push({
		id: todoItems.length + 1,
		desc: newItem
	});
	res.redirect('/');
});

module.exports = router;