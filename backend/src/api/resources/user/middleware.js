const UserData = require('../../../services/user/data');
const jsonUtilities = require('../../../utilities/jsonUtilities');

const toDelete = ['mailAddress', 'hashPassword', 'salt'];

module.exports = {
  filterGet: async (req, res, next) => {
    if (req.params.UserId) {
      const result = await UserData.findById(req.params.UserId);
      if (!result) {
        return res.status(404).send('User Not Found');
      }
      res.locals.user = jsonUtilities.deletePrivateFieldOnJSON(result.toJSON(), toDelete);
      return next();
    }
    return res.status(404).send('Bad Request');
  },
  filterGetAll: async (req, res, next) => {
    const result = await UserData.getAll();
    res.locals.allUsers = jsonUtilities.deletePrivateFieldOnArrayOfJSON(result, toDelete);
    return next();
  },
  filterStudents: async (req, res, next) => {
    const result = await UserData.getStudent();
    res.locals.students = jsonUtilities.deletePrivateFieldOnArrayOfJSON(result, toDelete);
    return next();
  },
  filterTeacher: async (req, res, next) => {
    const result = await UserData.getProf();
    res.locals.teachers = jsonUtilities.deletePrivateFieldOnArrayOfJSON(result, toDelete);
    return next();
  },
};
