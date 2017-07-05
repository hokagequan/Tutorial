'use strict'

import mongoose from "mongoose";

let schema = new mongoose.Schema({
	twid: String,
	active: Boolean,
	author: String,
	avatar: String,
	date: Date,
	screenname: String
});

let Tweet = mongoose.model('tweet', schema);

export function getTweets(page, skip) {
	let tweets = [],
		start = (page * 10) + (skip * 1);
	return tweet.find({}, 'twid active author avatar body date screenname', {skip: start, limit: 10}).sort({date: 'desc'}).exec()
			.then((docs) => {
				tweets = docs;
				tweets.forEach((tweet) => {
					tweet.active = true;
				})

				return tweets;
			});
}

export default Tweet;