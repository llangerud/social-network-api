const connection = require('../config/connection');
const { Thought, User, Reaction } = require('../models');
const { thoughts, users, reactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  await User.collection.insertMany(users);



  console.table(users)
  console.info('seeded');
  process.exit(0);
});
