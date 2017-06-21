'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.allComments = allComments;
exports.addComment = addComment;
exports.updateComment = updateComment;
exports.deleteComment = deleteComment;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentsSchema = new _mongoose2.default.Schema({
	author: String,
	text: String
});

var Comment = _mongoose2.default.model('Comment', CommentsSchema);

function allComments() {
	return Comment.find();
}

function addComment(author, text) {
	var comment = new Comment();
	comment.author = author;
	comment.text = text;

	return comment.save();
}

function updateComment(id, author, text) {
	return Comment.findById(id).then(function (comment) {
		author ? comment.author = author : null;
		text ? comment.text = text : null;

		return comment;
	}).then(function (comment) {
		return comment.save();
	});
}

function deleteComment(id) {
	return Comment.remove({ _id: id });
}

exports.default = Comment;

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var CommentsSchema = new Schema({
// 	author: String,
// 	text: String
// });

// module.exports = mongoose.model('Comment', CommentsSchema);