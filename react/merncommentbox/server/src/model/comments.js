'use strict'

import mongoose from "mongoose";

let CommentsSchema = new mongoose.Schema({
	author: String,
	text: String
});

let Comment = mongoose.model('Comment', CommentsSchema);

export function allComments() {
	return Comment.find()
}

export function addComment (author, text) {
	let comment = new Comment();
	comment.author = author;
	comment.text = text;

	return comment.save();
}

export function updateComment(id, author, text) {
	return Comment.findById(id)
			.then((comment) => {
				author ? comment.author = author : null;
				text ? comment.text = text : null;

				return comment;
			})
			.then((comment) => {
				return comment.save();
			})
}

export function deleteComment(id) {
	return Comment.remove({_id: id});
}

export default Comment;

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var CommentsSchema = new Schema({
// 	author: String,
// 	text: String
// });

// module.exports = mongoose.model('Comment', CommentsSchema);