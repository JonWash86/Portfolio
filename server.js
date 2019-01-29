'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
});

app.get('/projects', function(request, response){
  response.sendFile(`${__dirname}/public/index.html`);
});

app.get('/about', function(request, response){
  response.sendFile(`${__dirname}/public/index.html`);
});

app.get('/contact', function(request, response){
  response.sendFile(`${__dirname}/public/index.html`);
});



app.listen(PORT, function() {
  console.log(`listening on ${PORT}`);
});
