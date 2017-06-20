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

export default Comment;

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var CommentsSchema = new Schema({
// 	author: String,
// 	text: String
// });

// module.exports = mongoose.model('Comment', CommentsSchema);