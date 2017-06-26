'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var router = (0, _express.Router)();

router.route('/index', function (req, res) {});

router.route('/page/:page/:skip', function (req, res) {});

exports.default = router;