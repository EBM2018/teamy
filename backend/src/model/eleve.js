const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: { type: String, required: true, max: 150 },
  last_name: { type: String, required: true, max: 150 },
});


// Export the model
module.exports = mongoose.model('User', UserSchema);
