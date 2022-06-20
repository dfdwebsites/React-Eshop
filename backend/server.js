import express from 'express';
import data from './data.js';

// https://expressjs.com/en/4x/api.html#app
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
