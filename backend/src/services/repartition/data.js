const Repartition = require('./model');

module.exports = {
  create: async (repartition) => {
    const repartitionToSave = new Repartition(repartition);
    const repartitionSaved = await repartitionToSave.save();
    return repartitionSaved;
  },
  getAll: async () => {
    const result = await Repartition.find({});
    return result;
  },
  getById: async (id) => {
    const result = await Repartition.find({ _id: id });
    return result;
  },
  update: async (_id, repartition) => Repartition.findOneAndUpdate({ _id },
    repartition,
    { new: true }),
  deleteOnId: async id => Repartition.deleteOne({ _id: id }),
};
