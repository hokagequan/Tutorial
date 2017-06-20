import {Router} from "express";
import {allComments, addComment} from "../model/comments"

let router = Router();

router.route('/').get((req, res) => {
	console.log("I'm comments api!");
	allComments()
	.then((comments) => res.json(comments))
	.catch((err) => res.send(err));
}).post((req, res) => {
	console.log(`Add comment author: ${req.author} text: ${req.text}`);
	addComment(req.author, req.text)
	.then(() => res.send("Add Success"))
	.catch((err) => res.send(err));
});

export default router;