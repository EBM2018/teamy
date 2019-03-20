const Group = require('./model');

module.exports = {
  create: async (repartition) => {
    const repartitionToSave = new Group(repartition);
    const repartitionSaved = await repartitionToSave.save();
    return repartitionSaved;
  },
  getAll: async () => {
    const result = await Group.find({});
    return result;
  },
  getById: async (id) => {
    const result = await Group.findOne({ _id: id });
    return result;
  },
  getRepartitionById: async (id) => {
    const result = await Group.findOne({ _id: id }, { repartitions: 1 });
    return result;
  },
  update: async (_id, repartition) => Group.findOneAndUpdate({ _id },
    repartition,
    { new: true }),
  deleteOnId: async id => Group.deleteOne({ _id: id }),
};
