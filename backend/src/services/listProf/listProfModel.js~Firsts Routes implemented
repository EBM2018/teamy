const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ListProfSchema = new Schema({
  label: { type: String, required: true, max: 150 },
  listStudents: { type: Array, required: false, max: 150 },
  group: { type: Array, require: false },
});


// Export the model
module.exports = mongoose.model('ListProf', ListProfSchema);
