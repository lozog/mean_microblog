import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import Entry from './Entry.js';

const Schema = mongoose.Schema;

let Blog = new Schema({
	title: {
		type: String,
		unique: true,
		required: [true, "can't be blank"]
	},
	entries: [ Entry.schema ]
}, {timestamps: true});

Blog.plugin(uniqueValidator, {message: 'is already taken.'});

export default mongoose.model('Blog', Blog);
