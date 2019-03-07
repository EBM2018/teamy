const mongoose = require('mongoose');

const config = require('./index');

mongoose.connect(config.mongodb.uri, { useNewUrlParser: true }, (error) => {
  if (error) {
    console.log(error);
  }
});
