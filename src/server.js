const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground');

const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/users', require('./routers/user.router'));
app.use('/api/transactions', require('./routers/transaction.router'));

app.listen(3000, function(){
    console.log('hello');
})