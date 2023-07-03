const { User, Thought } = require('../models');

const seedData = async () => {
  try {
    const users = await User.create([
      { username: 'papster', email: 'papster@mail.com' },
      { username: 'linux', email: 'linux@mail.com' },

    ]);

    const thoughts = await Thought.create([
      {
        thoughtText: 'Thought 1',
        username: users[0].username,
      },
      {
        thoughtText: 'Thought 2',
        username: users[1].username,
      },
    ]);

    users[0].thoughts.push(thoughts[0]._id);
    users[1].thoughts.push(thoughts[1]._id);
    await Promise.all(users.map(user => user.save()));

    console.log('Data seeding completed successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Data seeding failed:', err);
    process.exit(1);
  }
};

seedData();
