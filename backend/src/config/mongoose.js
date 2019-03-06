const mongoose = require('mongoose');

const config = require('./index');

mongoose.connect(config.mongodb.uri, (error) => {
  if (error) {
    console.log(error);
  }
});
