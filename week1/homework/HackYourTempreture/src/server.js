const express = require('express');
const axios = require('axios');
const expressHandelbars = require('express-handlebars');

const app = express();

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
})

app.listen(3000);