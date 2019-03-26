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
      const result = await GroupData.getGroupsById(req.params.GroupId);
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  async createNew(req, res) {
    if (!req.body) {
      return res.status(400).send('No body');
    }
    if (!req.body.groupName) {
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
  async getSeances(req, res) {
    if (req.params.GroupId) {
      const result = await GroupData.getSeancesById(req.params.GroupId);
      return res.status(200).json(result);
    }
    return res.status(404).send('Bad Request');
  },
  async getOneSeance(req, res) {
    if (!req.params.SeanceId || !req.params.GroupId) {
      return res.status(404).send('Bad Request');
    }
    const result = await GroupData.getOneSeanceById(
      req.params.GroupId,
      req.params.SeanceId,
    );
    return res.status(200).json(result);
  },
  async getRepartition(req, res) {
    if (!req.params.GroupId || !req.params.SeanceId) {
      return res.status(404).send('Bad Request');
    }
    const result = await GroupData.getRepartitionById(
      req.params.GroupId,
      req.params.SeanceId,
    );
    return res.status(200).json(result);
  },
  async getOneRepartition(req, res) {
    if (!req.params.GroupId || !req.params.SeanceId || !req.params.RepartitionId) {
      return res.status(404).send('Bad Request');
    }
    const result = await GroupData.getOneRepartitionById(
      req.params.GroupId,
      req.params.SeanceId,
      req.params.RepartitionId,
    );
    return res.status(200).json(result);
  },
  async delete(req, res) {
    if (req.params.GroupId) {
      const result = await GroupData.deleteOnId(req.params.GroupId);
      return res.status(200).json(result);
    }
    return res.status(404).send('Bad Request');
  },
  async updateGroup(req, res) {
    if (!req.body) {
      return res.status(404).send('Bad Request');
    }
    try {
      const result = await GroupData.updateGroup(req.params.GroupId, req.body);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json(e);
    }
  },
  async updateSeance(req, res) {
    if (!req.body || !req.params.GroupId || !req.params.SeanceId) {
      return res.status(404).send('Bad Request');
    }
    try {
      const result = await GroupData.updateRepartition(
        req.params.GroupId,
        req.params.SeanceId,
        req.body,
      );
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).send(e);
    }
  },
};
// TODO: Add new Repartition & groups

module.exports = controller;
