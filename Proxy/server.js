const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

app.get('/:pid/getGalleries/', (req, res) => {
  axios.get(`http://localhost:1420/${req.params.pid}/getGalleries`)
    .then((data) => res.status(200).send(data.data))
    .catch(() => console.error('could not get Galleries'));
});

app.get('/:pid/product-details/', (req, res) => {
  axios.get(`http://localhost:8080/${req.params.pid}/product-details`)
    .then((data) => res.status(200).send(data.data))
    .catch(() => console.error('could not get Product Details'));
});

app.put('/:pid/product-details/wishlist', (req, res) => {
  axios.put(`http://localhost:8080/${req.params.pid}/product-details/wishlist`)
    .then((data) => res.status(200).send(data.data))
    .catch(() => console.error('could not update wishlist'));
});

app.get('/:pid/recommendation/getInfo', (req, res) => {
  axios.get(`http://localhost:1234/${req.params.pid}/recommendation/getInfo`)
    .then((data) => res.status(200).send(data.data))
    .catch(() => console.error('could not get Recommendations'));
});

app.get('/:pid/reviews/', (req, res) => {
  axios.get(`http://localhost:3000/${req.params.pid}/reviews`)
    .then((data) => res.status(200).send(data.data))
    .catch(() => console.error('could not get Reviews'));
});

app.put('/:pid/reviews/vote/:voteType/:id/:toggle', (req, res) => {
  axios.put(`http://localhost:3000/${req.params.pid}/reviews/vote/${req.params.voteType}/${req.params.id}/${req.params.toggle}`)
    .then((data) => res.status(200).send(data.data))
    .catch(() => console.error('could not update vote'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

