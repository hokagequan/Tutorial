import mongoose from 'mongoose';

let ShotSchema = new mongoose.Schema({
	userID: String,
	userName: String,
	imageURL: String,
	viewed: String,
	comments: String,
	liked: String,
	detail: String,
});

let Shot = mongoose.model('Shot', ShotSchema, 'Shots');

export function allShots() {
	return Shot.find();
}

export default Shot;