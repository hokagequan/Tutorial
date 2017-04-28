"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('port', process.env.PORT || '3000');
app.set('views', _path2.default.join(__dirname, 'views'));
app.use(_express2.default.static(_path2.default.join(__dirname, 'resource')));
app.get('/', function (req, res) {
	// res.render('./views/index.html');
	res.sendFile(_path2.default.join(__dirname + '/views/index.html'));
});

app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});