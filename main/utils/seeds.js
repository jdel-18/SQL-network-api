const { User, Thought } = require('../models');

const seedData = async () => {
  try {
    const users = await User.create([
      { username: 'papster', email: 'papster@mail.com' },
      { username: 'linux', email: 'linux@mail.com' },

    ]);

    const thoughts = await Thought.create([
      {
        thoughtText: 'today was extremely hot, I need to get a fan!',
        username: users[0].username,
      },
      {
        thoughtText: 'Is it just me or is it hot in here?',
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
