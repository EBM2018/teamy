const ProfGroup = require('./model');

module.exports = {
  create: async (profGroup) => {
    const profGroupToSave = new ProfGroup(profGroup);
    const savedProfGroup = await profGroupToSave.save();
    return savedProfGroup;
  },
  getAll: async () => {
    const result = await ProfGroup.find({});
    return result;
  },
  getRepartition: async (idProf_) => {
    const result = await ProfGroup.findOne({ idProf: idProf_ });
    return result;
  },
  update: async (_id, profGroup) => ProfGroup.findOneAndUpdate({ _id }, profGroup, { new: true }),
  findById: async id => ProfGroup.findOne({ _id: id }),
  deleteOnId: async id => ProfGroup.deleteOne({ _id: id }),
};
