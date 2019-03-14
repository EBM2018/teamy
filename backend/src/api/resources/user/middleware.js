const UserData = require('../../../services/user/data');
const jsonUtilities = require('../../../utilities/jsonUtilities');

module.exports = {
  filterGet: async (req, res, next) => {
    if (req.params.UserId) {
      const result = await UserData.findById(req.params.UserId);
      if (!result) {
        return res.status(404).send('User Not Found');
      }
      const toDelete = ['mailAddress', 'hashPassword', 'salt'];
      res.locals.user = jsonUtilities.deletePrivateField(result.toJSON(), toDelete);
      return next();
    }
    return res.status(404).send('Bad Request');
  },
  filterGetAll: async (req, res, next) => {
    const result = await UserData.getAll();
    const toReturn = result;
    const toDelete = ['mailAddress', 'hashPassword', 'salt'];
    for (let i = 0; i < result.length; i += 1) {
      const jsonDoc = result[i].toJSON();
      toReturn[i] = jsonUtilities.deletePrivateField(jsonDoc, toDelete);
    }
    res.locals.allUsers = toReturn;
    return next();
  },
};
