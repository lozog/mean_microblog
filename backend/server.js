import express from 'express';

const app = express();
app.get('/', (req, res) => res.send('hello world'));
app.listen(4000, () => console.log('Express server running on port 4000'));