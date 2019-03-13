const UserData = require('../../../services/user/data');

const deletePrivateField = function (jsonresult) {
  try {
    delete jsonresult.mailAddress;
    delete jsonresult.hashPassword;
    delete jsonresult.salt;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  filterGet: async (req, res, next) => {
    if (req.params.UserId) {
      const result = await UserData.findById(req.params.UserId);
      console.log(result);
      if (!result) {
        return res.status(404).send('User Not Found');
      }
      deletePrivateField(result);
      res.locals.user = result;
      return next();
    }
    return res.status(404).send('Bad Request');
  },
  filterGetAll: async (req, res, next) => {
    const result = await UserData.getAll();
    result.forEach(function (part, index) {
      const jsonDoc = this[index].toJSON();
      deletePrivateField(jsonDoc);
      this[index] = jsonDoc;
    }, result);
    res.locals.allUsers = result;
    return next();
  },
};
