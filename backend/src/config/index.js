module.exports = {
  app: {
    port: process.env.APP_PORT || 4000,
  },
  mongodb: {
    uri: process.env.MONGODB_URI,
    options: {
	  user: process.env.MONGO_INITDB_ROOT_USERNAME,
      useNewUrlParser: true,
      pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
	  authSource: "admin",
    },
  },
};
