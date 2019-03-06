module.exports = {
  app: {
    port: process.env.APP_PORT || 4000,
  },
  mongodb: {
    uri: process.env.MONGODB_URI,
    options: {
      user: 'Teamy',
      pass: 'Teamy',
      useNewUrlParser: true,
      authSource: 'admin',
    },
  },
};
