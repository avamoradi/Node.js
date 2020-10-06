const express = require('express');
const axios = require('axios');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const urlencodedParser = require('urlencoded-parser'); 
const { application } = require('express');


const app = express();
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json()) // for parsing application/json


app.get('/', (req, res) => {
  res.render('index');
})

app.post('/weather',  function(req, res){
  const cityName = req.body.cityName;
  res.send(cityName);
  console.log(cityName);
})

app.listen(3000);