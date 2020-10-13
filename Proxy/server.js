const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const {henry, eric, kenny, aubrey} = require('./serverLinks.js')

const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

app.get('/:pid/getGalleries/', (req, res) => {
  axios.get(`${henry}/${req.params.pid}/getGalleries`)
    .then((data) => res.status(200).send(data.data))
    .catch(() => console.error('could not get Galleries'));
});

app.get('/:pid/product-details/', (req, res) => {
  axios.get(`${eric}/${req.params.pid}/product-details`)
    .then((data) => res.status(200).send(data.data))
    .catch(() => console.error('could not get Product Details'));
});

app.put('/:pid/product-details/wishlist', (req, res) => {
  axios.put(`${eric}/${req.params.pid}/product-details/wishlist`)
    .then((data) => res.status(200).send(data.data))
    .catch(() => console.error('could not update wishlist'));
});

app.get('/:pid/recommendation/getInfo', (req, res) => {
  axios.get(`${aubrey}/${req.params.pid}/recommendation/getInfo`)
    .then((data) => res.status(200).send(data.data))
    .catch(() => console.error('could not get Recommendations'));
});

app.get('/:pid/reviews/', (req, res) => {
  axios.get(`${kenny}/${req.params.pid}/reviews`)
    .then((data) => res.status(200).send(data.data))
    .catch(() => console.error('could not get Reviews'));
});

app.put('/:pid/reviews/vote/:voteType/:id/:toggle', (req, res) => {
  axios.put(`${kenny}/${req.params.pid}/reviews/vote/${req.params.voteType}/${req.params.id}/${req.params.toggle}`)
    .then((data) => res.status(200).send(data.data))
    .catch(() => console.error('could not update vote'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

