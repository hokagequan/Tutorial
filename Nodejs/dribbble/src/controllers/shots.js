import {Router} from 'express';
import {allShots} from '../models/shot';

let router = Router();

router.route("/").get((req, res) => {
	allShots()
	.then((shots) => {
		res.json(shots)
	})
	.catch((err) => res.send(err));
 });

export default router;