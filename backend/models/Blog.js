import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

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

let Blog = new Schema({
	title: {
		type: String,
		unique: true,
		required: [true, "can't be blank"]
	},
	entries: [ Entry ]
}, {timestamps: true});

Blog.plugin(uniqueValidator, {message: 'is already taken.'});

export default mongoose.model('Blog', Blog);