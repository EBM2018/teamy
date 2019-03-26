/* eslint-disable no-underscore-dangle */
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
  getById: async (GroupId) => {
    const result = await Group.findOne({ _id: GroupId });
    return result;
  },
  getSeancesById: async (GroupId) => {
    const result = await Group.findOne({ _id: GroupId }, { seances: 1 });
    if (!result.seances) {
      return [];
    }
    return result.seances;
  },
  getOneSeanceById: async (GroupId, SeanceId) => {
    // TODO MAKE IT WORK
    const seances = await module.exports.getSeancesById(GroupId);
    if (!seances) {
      console.log('empty seances');
      return [];
    }
    for (let i = 0; i < seances.length; i += 1) {
      const seance = seances[i];
      console.log(seance);
      console.log(SeanceId === seance._id);
      if (seance._id === SeanceId) {
        console.log('success on getoneseance');
        return seance;
      }
    }
    return {};
  },
  getRepartitionById: async (GroupId, SeanceId) => {
    const seance = await module.exports.getOneSeanceById(GroupId, SeanceId);
    if (!seance || !seance.repartition) {
      return [];
    }
    return seance.repartition;
  },
  getOneRepartitionById: async (GroupId, SeanceId, RepartitionId) => {
    const repartition = await module.exports.getRepartitionsById(GroupId, SeanceId);
    if (!repartition) {
      return {};
    }
    for (let i = 0; i < repartition.length; i += 1) {
      const rep = repartition[i];
      if (rep._id === RepartitionId) {
        return rep;
      }
    }
    return {};
  },
  update: async (_id, repartition) => Group.findOneAndUpdate({ _id },
    repartition,
    { new: true }),
  deleteOnId: async id => Group.deleteOne({ _id: id }),
};
