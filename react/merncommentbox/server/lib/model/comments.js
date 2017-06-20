'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.allComments = allComments;

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

exports.default = Comment;

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var CommentsSchema = new Schema({
// 	author: String,
// 	text: String
// });

// module.exports = mongoose.model('Comment', CommentsSchema);