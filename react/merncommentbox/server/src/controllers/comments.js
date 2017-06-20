import {Router} from "express";

let router = Router();

router.route('/').get((req, res) => {
	console.log("I'm comments api!");
});

export default router;