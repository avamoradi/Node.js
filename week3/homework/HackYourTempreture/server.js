const express = require('express');
const axios = require('axios');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');

const API_KEY  = require('./source/keys.json');
const { response } = require('express');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'))
 
app.get('/', (req, res) => {
  res.render('home');
})

app.post('/weather', function(req, res){
  const cityName = req.body.cityName;
  if (cityName == ""){
    res.render('home', {
      weatherText: 'Please enter a city'
     });
    
  }
  let message = '';
    
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_KEY}`)
  .then(function (response){
    // handle success
    const temp = response.data.main.temp;
    const name = response.data.name;

     message = 'The temperature in {{nameOfCity}} is {{tempreture}} °C!';
     var template = handlebars.compile(message);
     const weatherdata = {"nameOfCity" : name , "tempreture" : temp}
     res.render('home', {
      weatherText: template(weatherdata)
     });
  }) 
  .catch(function (error){
    const msg = error.response.data.message;
    if (msg == "city not found") {
      message = "city not found!"
      res.render('home', {
        weatherText: message
       });
    }else {
     console.log(error.message.data);
    }   
  })
});

app.listen(3000);