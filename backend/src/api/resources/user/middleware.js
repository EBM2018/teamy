const UserData = require('../../../services/user/data');

const deletePrivateField = (jsonToModify) => {
  const jsonResult = jsonToModify;
  delete jsonResult.mailAddress;
  delete jsonResult.hashPassword;
  delete jsonResult.salt;
  return jsonResult;
};

module.exports = {
  filterGet: async (req, res, next) => {
    if (req.params.UserId) {
      const result = await UserData.findById(req.params.UserId);
      console.log(result);
      if (!result) {
        return res.status(404).send('User Not Found');
      }
      res.locals.user = deletePrivateField(result);
      return next();
    }
    return res.status(404).send('Bad Request');
  },
  filterGetAll: async (req, res, next) => {
    const result = await UserData.getAll();
    result.forEach((part, index) => {
      const jsonDoc = this[index].toJSON();
      deletePrivateField(jsonDoc);
      this[index] = jsonDoc;
    }, result);
    res.locals.allUsers = result;
    return next();
  },
};
