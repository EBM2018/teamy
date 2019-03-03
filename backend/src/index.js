const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').Server(app);

const config = require('./config');

// setup database connexion
require('./config/mongoose');

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.use('/api', require('./api'));

app.use(serveStatic('./public'));

app.use((err, req, res) => {
  console.log(err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send(err.message);
});

server.listen(config.app.port, (err) => {
  if (err) console.error(err);
  else console.log(`Listening on port ${config.app.port}`);
});
