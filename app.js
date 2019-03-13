const express = require('express');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

bookRouter.route('/books').get((req, res) => {
  const response = { hello: 'This is my API' };
  res.json(response);
});
app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API');
});
app.use('/api', bookRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
