'use strict';

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
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

app.post('/post-test', function(request, response) {
  response.send(request.body);
});

app.post('/formSend', function (request, response) {
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      // TODO: replace with prcoess.env before deploying
      // Implement an actual env file with .gitignore in the future.
      user: 'jwashdotnet@gmail.com',
      pass: 'czipkmtukcocehnf'
      // user: process.env.GMAIL_ACCT,
      // pass: process.env.GMAIL_PW
    }
  });

  const mailOptions = {
    from: request.body.name,
    to: 'jonathan.washington@gmail.com',
    subject: 'New message from jonwashington.net',
    text: `${request.body.name} (${request.body.email}) says: ${request.body.message}`
  };

  smtpTrans.sendMail(mailOptions, function (error, info) {
    console.log('The response is ' + JSON.stringify(response));
    if (error) {
      return console.log('there has been an error: ' + error);
    }
    else {
      console.log('This worked! ' + response);
    }
  });

  response.end();
});


app.listen(PORT, function() {
  console.log(`listening on ${PORT}`);
});
