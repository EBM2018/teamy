const ProfGroupData = require('../../../services/ProfGroup/data');
const userData = require('../../../services/user/data');

const controller = {
  async getAll(req, res) {
    try {
      const result = await ProfGroupData.getAll();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async newProfGroup(req, res) {
    if (!req.body) {
      return res.status(400).send('No body found');
    }
    if (!req.body.idProf || !req.body.idRepartition) {
      return res.status(400).send('wrong or missing fields');
    }

    const isProf = await userData.isProf(req.body.idProf);
    if (!isProf) {
      return res.status(400).send('id given does not refer to a professor');
    }

    try {
      // TODO : check if the prof and the group exists
      const newEntry = await ProfGroupData.create(req.body);
      return res.status(200).json(newEntry);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async getRepartition(req, res) {
    try {
      const result = await ProfGroupData.getRepartition(req.params.idProf);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async deleteOnLineId(req, res) {
    if (!req.params.id) {
      return res.status(400).send('fields missing or wrong value');
    }
    try {
      const result = await ProfGroupData.deleteOnId(req.params.id);
      console.log(result);
      if (result.deletedCount !== 1) {
        return res.status(500).send('An error occurred');
      }
      return res.status(200).send(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
module.exports = controller;
