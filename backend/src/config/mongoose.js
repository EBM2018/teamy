const mongoose = require('mongoose');

const config = require('./index');

<<<<<<< Updated upstream
mongoose.connect(config.mongodb.uri, { useNewUrlParser: true }, (error) => {
=======
mongoose.connect(config.mongodb.uri, config.mongodb.options, (error) => {
>>>>>>> Stashed changes
  if (error) {
    console.log(error);
  }
});
