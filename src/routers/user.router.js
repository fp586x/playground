const express = require('express');

// user resources
const userRouter = express.Router()

userRouter.get('/', function (req, res) {
    return res.send('users')
})

userRouter.post('/', function (req, res) {
    console.log(req.body)
    return res.send('users post')
})

userRouter.put('/:id', function (req, res) {
    console.log(req.params.id)
    console.log(req.body)
    return res.send('users put')
})

userRouter.delete('/:id', function (req, res) {
    console.log(req.params.id)
    return res.send('users delete')
})

module.exports = userRouter;
