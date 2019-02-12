const UserData = require('../../../services/user/data');

const controller = {

  async all(req, res) {
    try {
      const result = await UserData.getAll();
      console.log(result);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async newUser(req, res) {
    if (req.body) {
      try {
        const result = await UserData.create(req.body);
        return res.status(200).json(result);
      } catch (error) {
        return (error);
      }
    }
    return res.status(400).send('Bad Request');
  },
};

module.exports = controller;
