const connection = require('../config/connection');
const { Thought, User, Reaction } = require('../models');
const { thoughts, users, reactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  await Thought.deleteMany({});

//   await Reaction.deleteMany({});

  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts);

//   await Reaction.collection.insertMany(reactions);

  console.table(users, thoughts);
  console.info('seeded');
  process.exit(0);
});
