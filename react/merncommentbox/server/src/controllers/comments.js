import {Router} from "express";
import {allComments, addComment, updateComment, deleteComment} from "../model/comments"

let router = Router();

router.route('/').get((req, res) => {
	allComments()
	.then((comments) => res.json(comments))
	.catch((err) => res.send(err));
}).post((req, res) => {
	console.log(`Add comment author: ${req.body.author} text: ${req.body.text}`);
	addComment(req.body.author, req.body.text)
	.then(() => res.send(req.body))
	.catch((err) => res.send(err));
});

router.route('/:comment_id').put((req, res) => {
	console.log(`Update comment: ${req.params.comment_id} author: ${req.body.author} text: ${req.body.text}`);
	updateComment(req.params.comment_id, req.body.author, req.body.text)
	.then(() => res.send("Update Success"))
	.catch((err) => res.send(err));
}).delete((req, res) => {
	console.log(`Delete comment: ${req.params.comment_id}`);
	deleteComment(req.params.comment_id)
	.then(() => res.send("Delete Success"))
	.catch((err) => res.send(err));
});

export default router;