import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Entry = new Schema({
	title: {
		type: String,
		required: [true, "can't be blank"]
	},
	content: {
		type: String,
		required: [true, "can't be blank"]
	},
	blog: String
}, {timestamps: true});

export default mongoose.model('Entry', Entry);
