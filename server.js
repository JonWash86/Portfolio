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
      user: process.env.GMAIL_ACCT,
      pass: process.env.GMAIL_PW
    }
  });
  const mailOptions = {
    from: request.body.name,
    to: 'jonathan.washington@gmail.com',
    subject: 'New message from jonwashington.net',
    text: `${request.body.name} (${request.body.email}) says: ${request.body.message}`
  };
  smtpTrans.sendMail(mailOptions, function (error, info) {
    console.log(response);
    if (error) {
      return console.log(error);
    }
    else {
      console.log(response);
    }
  });
  response.writeHead(301, { Location: '/contact' });
  // successfulForm();
  response.end();
});


app.listen(PORT, function() {
  console.log(`listening on ${PORT}`);
});
