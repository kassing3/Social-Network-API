const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://localhost/socialNetworkAPI';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
