"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require("express");

var router = (0, _express.Router)();

router.route('/').get(function (req, res) {
	console.log("I'm comments api!");
});

exports.default = router;