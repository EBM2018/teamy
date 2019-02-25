const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 150,
  },
  last_name: {
    type: String,
    required: true,
    max: 150,
  },
  isProf: {
    type: Boolean,
    required: true,
  },
  listGroup: {
    type: Array,
    required: false,
    max: 150,
  },
});


// Export the model
module.exports = mongoose.model('User', UserSchema);
