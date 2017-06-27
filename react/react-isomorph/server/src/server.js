'use strict'

import express from "express";
import mongoose from "mongoose";
import exphbs from "express-handlebars";
import twitter from "ntwitter";
import http from "http";
import socket from "socket.io";
import config from "../../config";
import routes from "./routes";
import streamHandler from "../../src/utils/streamHandler";

let app = express();
let port = process.env.PORT || 8080;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.disable('etag');

mongoose.connect(`mongodb://mytest:123456@ds129462.mlab.com:29462/mydb`, {useMongoClient: true});

let twit = new twitter(config.twitter);

app.get('/', routes);
app.use('/', express.static(__dirname + "/plublic/"));

let server = http.createServer(app).listen(port, () => {
	console.log('Server listening on port ' + port);
});

let io = socket.listen(server);

// twit.stream('statuses/filter', {track: 'scotch_io, #scotchio'}, (stream) => {
// 	streamHandler(stream.io);
// });