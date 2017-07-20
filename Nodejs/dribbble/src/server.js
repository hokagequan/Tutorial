import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import controller from './controllers';

let app = express();
let port = process.env.API_PORT || 3001;

mongoose.connect(`mongodb://mytest:123456@ds129462.mlab.com:29462/mydb`, {
	useMongoClient: true
});

app.use(bodyParser.urlencoded({extended: true}));
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

app.use(controller);

app.listen(port, function () {
	console.log(`api running on port ${port}`);
});