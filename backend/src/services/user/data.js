var ObjectId = require('mongodb').ObjectID;
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
  findById: async (_id) => {
    const result = await User.find(ObjectId(_id));
    console.log('find by id', result);
    return result;
  },
};
