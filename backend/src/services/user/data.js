const ObjectId = require('mongodb').ObjectID;
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
  getStudent: async () => {
    const result = await User.find({ isProf: false });
    return result;
  },
  getProf: async () => {
    const result = await User.find({ isProf: true });
    return result;
  },
  findById: async (_id) => {
    const result = await User.find(ObjectId(_id));
    console.log('find by id', result);
    return result;
  },
  isProf: async (_id) => {
    try {
      const result = await User.findOne(ObjectId(_id));
      return result.isProf;
    } catch (e) {
      return -1;
    }
  },
  update: async (_id, user) => User.findOneAndUpdate({ _id }, user, { new: true }),
  deleteOnId: async id => User.deleteOne({ _id: id }),
};
