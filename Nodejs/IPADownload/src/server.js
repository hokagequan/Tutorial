import express from "express";
import path from "path";

let app = express();

app.set('port', process.env.PORT || '3000');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'resource')));
app.get('/', function (req, res) {
	// res.render('./views/index.html');
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});