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
  startingDate: {
    type: Date,
    required: false,
  },
  finishingDate: {
    type: Date,
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

module.exports = mongoose.model('Group', GroupSchema);
