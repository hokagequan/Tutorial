'use strict';

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Comment = require('./model/comments');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

mongoose.connect("mongodb://mytest:123456@ds129462.mlab.com:29462/mydb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
	//and remove cacheing so we get the most recent comments
	res.setHeader('Cache-Control', 'no-cache');
	next();
});

router.get('/', function (req, res) {
	res.json({ message: 'API initialized' });
});

router.route('/comments').get(function (req, res) {
	console.log("****Start get comments!");
	Comment.find(function (err, comments) {
		if (err) {
			res.send(err);
		}

		res.json(comments);
	});
}).post(function (req, res) {
	var comment = new Comment();
	comment.author = req.body.author;
	comment.text = req.body.text;
	comment.save(function (err) {
		if (err) {
			res.send(err);
		}

		res.json({ message: 'Comment successfully added!' });
	});
});

app.use('/api', router);

app.listen(port, function () {
	console.log("api running on port " + port);
});