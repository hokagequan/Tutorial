import {Router} from 'express';
import shots from './shots';

let router = Router();

router.route("/api").get((req, res) => {
	res.json({message: 'API initialized!'});
});

router.use("/api/shots", shots);

export default router;