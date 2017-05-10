'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('port', process.env.port || 3000);
app.use(require('./controllers'));

app.listen(app.get('port'), function () {
	console.log("Server started: http://localhost:" + app.get('port') + "/");
});