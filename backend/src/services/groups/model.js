const mongoose = require('mongoose');

const RepartitionSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    max: 150,
  },
  repartitions: {
    type: Array,
    required: true,
    max: 150,
  },
  cours: {
    type: String,
    required: false,
    max: 50,
  },
  date: {
    type: Date,
    required: false,
  },

});

// Export the model
module.exports = mongoose.model('Repartition', RepartitionSchema);
