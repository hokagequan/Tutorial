import express from "express";
import bodyParser from "body-parser";
import index from "./controllers";
import path from "path";

let app = express();

app.set('port', (process.env.port || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(index);

app.listen(app.get('port'), () => {
	console.log("Server started: http://localhost:" + app.get('port') + "/");
});