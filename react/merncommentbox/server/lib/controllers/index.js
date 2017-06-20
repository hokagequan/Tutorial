"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require("express");

var _comments = require("./comments");

var _comments2 = _interopRequireDefault(_comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.route('/api', function (req, res) {
	res.json({ message: 'API innitialized!' });
});

router.use('/api/comments', _comments2.default);

exports.default = router;