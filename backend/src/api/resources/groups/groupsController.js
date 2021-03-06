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
  async createGroup(req, res) {
    if (!req.body) {
      return res.status(400).send('No body');
    }
    if (!req.body.groupName) {
      return res.status(400).send('missing or wrong fields');
    }
    try {
      const result = await GroupData.createGroup(req.body);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async createSeance(req, res) {
    if (!req.body || !req.params.GroupId) {
      return res.status(200).send('Bad Request');
    }
    const result = await GroupData.createSeance(req.params.GroupId, req.body);
    return res.status(200).json(result);
  },
  async getSeances(req, res) {
    if (req.params.GroupId) {
      const result = await GroupData.getSeancesById(req.params.GroupId);
      return res.status(200).send(result);
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
      const result = await GroupData.updateSeance(
        req.params.GroupId,
        req.params.SeanceId,
        req.body,
      );
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).send(e);
    }
  },
  async deleteGroup(req, res) {
    if (req.params.GroupId) {
      const result = await GroupData.deleteGroup(req.params.GroupId);
      return res.status(200).json(result);
    }
    return res.status(404).send('Bad Request');
  },
  async deleteSeance(req, res) {
    if (!req.params.GroupId || !req.params.SeanceId) {
      return res.status(404).send('Bad Request');
    }
    const result = await GroupData.deleteSeance(req.params.GroupId, req.params.SeanceId);
    return res.status(200).send(result);
  },
};
// TODO: Add new Repartition & groups

module.exports = controller;
