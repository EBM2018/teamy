const UserData = require('../../../services/user/data');

// eslint-disable-next-line func-names
const deletePrivateField = function (jsonresult) {
  try {
    // eslint-disable-next-line no-param-reassign
    delete jsonresult.mailAddress;
    // eslint-disable-next-line no-param-reassign
    delete jsonresult.hashPassword;
    // eslint-disable-next-line no-param-reassign
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
    result.forEach((part, index) => {
      const jsonDoc = this[index].toJSON();
      deletePrivateField(jsonDoc);
      this[index] = jsonDoc;
    }, result);
    res.locals.allUsers = result;
    return next();
  },
};
