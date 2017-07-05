import Tweet from "../models/tweet";

export function streamHandler(stream, io) {
	stream.on('data', (data) => {
		let tweet = {
			twid: data['id'],
      		active: false,
      		author: data['user']['name'],
      		avatar: data['user']['profile_image_url'],
		    body: data['text'],
      		date: data['created_at'],
      		screenname: data['user']['screen_name']
		};

		let tweetEntry = new Tweet(tweet);
		tweetEntry.save()
		.then(() => io.emit('tweet', tweet))
		.catch(err => console.log("Tweet save Failed"));
	});
}