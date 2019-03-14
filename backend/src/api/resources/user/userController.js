const UserData = require('../../../services/user/data');

const controller = {

  async all(req, res) {
    return res.status(200).json(res.locals.allUsers);
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
        return res.status(500).json(error);
      }
    }
    return res.status(400).send('Bad Request');
  },
  async getUserById(req, res) {
    return res.status(200).json(res.locals.user);
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
  async deleteUserById(req, res, next) {
    if (req.params.UserId) {
      try {
        const result = await UserData.deleteOnId(req.params.UserId);
        if (result.deletedCount !== 1) {
          res.status(500).send('An Error Occured');
        }
        res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    }
    return res.status(400).send('Bad Request');
  },
  async checkIfProf(req, res) {
    if (!req.params.UserId) {
      res.status(400).send('no id found');
    }
    try {
      const result = await UserData.isProf(req.params.UserId);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  // TODO : new method : add new group to a student (append to list_group)
  // TODO : remove from list group
};

module.exports = controller;
