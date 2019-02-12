const User = require('./model');

module.exports = {
  create: async (user) => {
    const userToSave = new User(user);
    const savedUser = await userToSave.save();
    return savedUser;
  },
  getAll: async () => {
    const result = await User.find({});
    return result;
  },
};
