const RepartitionData = require('../../../services/repartition/data');

const controller = {

  async getAll(req, res) {
    try {
      const result = await RepartitionData.getAll();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  // check if input is ok ??
  async createNew(req, res) {
    if (!req.body) {
      return res.status(400).send('No body');
    }
    if (!req.body.label || !req.body.group) {
      return res.status(400).send('missing or wrong fields');
    }
    // TODO if -> verfier format des donnees
    try {
      const result = await RepartitionData.create(req.body);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async getGroupById(req, res) {
    if (req.params.RepartitionId) {
      const result = await RepartitionData.getGroupById(req.params.RepartitionId);
      return res.status(200).json(result);
    }
    return res.status(404).send('Bad Request');
  },
  async delete(req, res) {
    if (req.params.RepartitionId) {
      const result = await RepartitionData.deleteOnId(req.params.RepartitionId);
      return res.status(200).json(result);
    }
    return res.status(404).send('Bad Request');
  },
};
// TODO: Add new Repartition & repartition
// TODO: Modify Repartition & repartition

module.exports = controller;
