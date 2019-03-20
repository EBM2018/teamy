const GroupData = require('../../../services/groups/data');

const controller = {

  async getAll(req, res) {
    try {
      const result = await GroupData.getAll();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async getById(req, res) {
    if (!req.params.GroupId) {
      return res.status(404).send('Bad Request');
    }
    try {
      const result = await GroupData.getById(req.params.GroupId);
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  async createNew(req, res) {
    if (!req.body) {
      return res.status(400).send('No body');
    }
    if (!req.body.label || !req.body.repartitions) {
      return res.status(400).send('missing or wrong fields');
    }
    // TODO if -> verfier format des donnees
    try {
      const result = await GroupData.create(req.body);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async getRepartitionById(req, res) {
    if (req.params.GroupId) {
      const result = await GroupData.getRepartitionById(req.params.GroupId);
      return res.status(200).json(result);
    }
    return res.status(404).send('Bad Request');
  },
  async delete(req, res) {
    if (req.params.GroupId) {
      const result = await GroupData.deleteOnId(req.params.GroupId);
      return res.status(200).json(result);
    }
    return res.status(404).send('Bad Request');
  },
  async update(req, res) {
    if (!req.body) {
      return res.status(404).send('Bad Request');
    }
    try {
      const result = await GroupData.update(req.params.GroupId, req.body);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json(e);
    }
  },
};
// TODO: Add new Repartition & groups

module.exports = controller;
