const mongoose = require('mongoose');

const RepartitionSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    max: 150,
  },
  group: {
    type: Array,
    required: true,
    max: 150,
  },
});

// Export the model
module.exports = mongoose.model('Repartition', RepartitionSchema);
