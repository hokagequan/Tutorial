import express from "express";
import {Router} from "express";
import path from "path";

let router = Router();

router.use(express.static("./app/public"));
router.get('/', (req, res) => {
	res.sendFile(path.join('./app/public/index.html'));
});

export default router;