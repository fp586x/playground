const express = require('express');

// transaction resources
const transactionRouter = express.Router()

transactionRouter.get('/', function (request, response) {
    return response.send('transactionns');
})

module.exports = transactionRouter;
