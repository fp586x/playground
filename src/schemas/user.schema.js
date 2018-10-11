const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    }
})

module.exports = userSchema;
