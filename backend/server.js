import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Blog from './models/Blog';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/microblog');
const connection = mongoose.connection;

connection.once('open', () => {
	console.log('MongoDB connection established successfully');
});

router.route('/blogs').get((req, res) => {
	Blog.find((err, blogs) => {
		if (err)
			console.log(err);
		else
			res.json(blogs);
	});
});

router.route('/blogs/:id').get((req, res) => {
	Blog.findById(req.params.id, (err, blog) => {
		if (err)
			console.log(err);
		else
			res.json(blog);
	});
});

router.route('/blogs/add').post((req, res) => {
	let blog = new Blog(req.body);

	blog.save()
		.then(blog => {
			res.status(200).json({'blog': 'Added successfully'});
		})
		.catch(err => {
			console.log(err);
			let message = 'Failed to create new record';
			if (err.name === 'ValidationError') {
				message = message + ': Title is already taken';
			}
			res.status(400).send(message);
			// res.status(400).send('Failed to create new record');
		});
});

router.route('/blogs/update/:id').post((req, res) => {
	Blog.findById(req.params.id, (err, blog) => {
		if (!blog)
			return next(new Error('Could not load document'));

		blog.title = req.body.title;

		blog.save().then(blog => {
			res.json('Update done');
		}).catch(err => {
			let message = 'Update failed';
			if (err.name === 'ValidationError') {
				message = message + ': Title is already taken';
			}
			res.status(400).send(message);
		});
	});
});

router.route('/blogs/delete/:id').get((req, res) => {
	Blog.findByIdAndRemove({_id: req.params.id}, (err, blog) => {
		if (err)
			res.json(err);
		else
			res.json('Removed successfully');
	});
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));
