const mongoose = require('mongoose');

const config = require('./index');

console.log(config.mongodb.options.user);
mongoose.connect(config.mongodb.uri, config.mongodb.options);
