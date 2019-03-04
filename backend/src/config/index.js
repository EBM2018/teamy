module.exports = {
  app: {
    port: process.env.APP_PORT || 4000,
  },
  mongodb: {
    uri: process.env.MONGODB_URI,
    options: {
      useNewUrlParser: true,
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
    },
  },
  options: {
    useNewUrlParser: true,
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
  },
};
