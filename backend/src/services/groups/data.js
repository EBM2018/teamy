const Group = require('./modelGroup');

// const Repartition = require('./modelRepartition');

module.exports = {
  createGroup: async (repartition) => {
    const repartitionToSave = new Group(repartition);
    const repartitionSaved = await repartitionToSave.save();
    return repartitionSaved;
  },
  createSeance: async (GroupId, seance) => {
    const group = await module.exports.getGroupsById(GroupId);
    try {
      const result = group.seances.create(seance);
      return result;
    } catch (err) {
      return err;
    }
  },
  getAll: async () => {
    const result = await Group.find({});
    return result;
  },
  getGroupsById: async (GroupId) => {
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
      console.log('no seance');
      return [];
    }
    for (let i = 0; i < seances.length; i += 1) {
      const seance = seances[i];
      // eslint-disable-next-line no-underscore-dangle
      if (SeanceId === `${seance._id}`) {
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
    const repartition = await module.exports.getRepartitionById(GroupId, SeanceId);
    if (!repartition) {
      return {};
    }
    for (let i = 0; i < repartition.length; i += 1) {
      const rep = repartition[i];
      // eslint-disable-next-line no-underscore-dangle
      if (`${rep._id}` === RepartitionId) {
        return rep;
      }
    }
    return {};
  },
  updateGroup: async (GroupId, group) => Group.findOneAndUpdate({ GroupId },
    group,
    { new: true }),
  deleteGroup: async id => Group.deleteOne({ _id: id }),
  updateSeance: async (GroupId, SeanceId, Seance) => {
    Group.findOneAndUpdate(
      {
        _id: GroupId,
        'seances._id': SeanceId,
      },
      {
        $set: {
          'seances.$': Seance,
        },
      },
      err => err,
    );
  },
  deleteSeance: async (GroupId, SeanceId) => {
    const group = await module.exports.getGroupsById(GroupId);
    group.seances.id(SeanceId).remove();
    group.save((err) => {
      if (err) return err;
      return 'ok';
    });
  },
};
