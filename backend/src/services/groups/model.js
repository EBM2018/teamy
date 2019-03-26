const mongoose = require('mongoose');

const RepartitionSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: true,
    max: 20,
  },
  arrayStudentId: {
    type: Array,
    required: true,
  },
});

const SeanceSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    max: 20,
  },
  date: {
    type: Date,
    required: false,
  },
  startingHour: {
    type: String,
    required: false,
  },
  finishingHour: {
    type: String,
    required: false,
  },
  repartition: [RepartitionSchema],
});

const GroupSchema = new mongoose.Schema({

  seances: [SeanceSchema],

  groupName: {
    type: String,
    required: true,
    max: 50,
  },


});

// Exports the model
module.exports = mongoose.model('Group', GroupSchema);
