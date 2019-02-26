const mongoose = require('mongoose');

const ProfGroupSchema = new mongoose.Schema({
  idRepartition: {
    type: String,
    required: true,
    max: 150,
  },
  idProf: {
    type: String,
    required: true,
    max: 150,
  },
});

// Export the model
module.exports = mongoose.model('ProfGroup', ProfGroupSchema);
