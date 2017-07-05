import {Router} from "express";
import react from "react";
import Tweet, {getTweets} from "../../src/models/tweet";

let router = Router();

router.route('/index', (req, res) => {
	console.log("index request recieved!");
	getTweets(0, 0)
	.then((tweets) => {
		let markup = react.renderComponentToString(
			TweetsApp({tweets: tweets})
		);

		res.render('home', {
			markup: markup,
			state: JSON.stringify(tweets)
		});
	})
	.catch(() => console.log("Get Tweets failed"));
});

router.route('/page/:page/:skip', (req, res) => {
	console.log('page request recieved!');
	getTweets(req.params.page, req.params.skip)
	.then((tweets) => res.send(tweets))
	.catch(() => console.log("Get Tweets failed"));
});

export default router;