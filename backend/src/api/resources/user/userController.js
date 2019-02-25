const UserData = require('../../../services/user/data');

const controller = {

  async all(req, res) {
    try {
      const result = await UserData.getAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  async eleve(req, res) {
    try {
      const result = await UserData.getStudent();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  async prof(req, res) {
    try {
      const result = await UserData.getProf();
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
  async getUserById(req, res) {
    console.log(req.params.UserId);
    try {
      const result = await UserData.findById(req.params.UserId);
      console.log('getUserById', result);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json(e);
    }
  },
  async editUserById(req, res, next) {
    if (req.body) {
      try {
        const result = await UserData.update(req.params.UserId, req.body);
        if (!result) {
          return res.status(404).send('Not Found');
        }
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    }
    return res.status(400).send('Bad Request...');
  },
};

module.exports = controller;
