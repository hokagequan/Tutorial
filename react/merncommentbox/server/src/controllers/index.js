import {Router} from "express";
import comment from "./comments";

let router = Router();

router.route('/api', (req, res) => {
	res.json({message: 'API innitialized!'});
});

router.use('/api/comments', comment);

export default router;