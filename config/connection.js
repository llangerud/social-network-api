const { connect, connection } = require('mongoose');


const connectionString =
  process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/socialDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;