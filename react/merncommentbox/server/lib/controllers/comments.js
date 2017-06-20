"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require("express");

var _comments = require("../model/comments");

var router = (0, _express.Router)();

router.route('/').get(function (req, res) {
	console.log("I'm comments api!");
	(0, _comments.allComments)().then(function (comments) {
		return res.json(comments);
	}).catch(function (err) {
		return res.send(err);
	});
}).post(function (req, res) {
	console.log("Add comment author: " + req.body.author + " text: " + req.body.text);
	(0, _comments.addComment)(req.body.author, req.body.text).then(function () {
		return res.send(req.body);
	}).catch(function (err) {
		return res.send(err);
	});
});

exports.default = router;