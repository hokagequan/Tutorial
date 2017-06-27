'use strict';

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _expressHandlebars = require("express-handlebars");

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _ntwitter = require("ntwitter");

var _ntwitter2 = _interopRequireDefault(_ntwitter);

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _socket = require("socket.io");

var _socket2 = _interopRequireDefault(_socket);

var _config = require("../../config");

var _config2 = _interopRequireDefault(_config);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

var _streamHandler = require("../../src/utils/streamHandler");

var _streamHandler2 = _interopRequireDefault(_streamHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 8080;

app.engine('handlebars', (0, _expressHandlebars2.default)({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.disable('etag');

_mongoose2.default.connect("mongodb://mytest:123456@ds129462.mlab.com:29462/mydb");

var twit = new _ntwitter2.default(_config2.default.twitter);

app.get('/', _routes2.default);
app.use('/', _express2.default.static(__dirname + "/plublic/"));

var server = _http2.default.createServer(app).listen(port, function () {
	console.log('Server listening on port ' + port);
});

var io = _socket2.default.listen(server);

// twit.stream('statuses/filter', {track: 'scotch_io, #scotchio'}, (stream) => {
// 	streamHandler(stream.io);
// });