import {Router} from "express";

let router = Router();

router.route('/index', (req, res) => {
	console.log("index request recieved!");
});

router.route('/page/:page/:skip', (req, res) => {
	console.log('page request recieved!');
});

export default router;