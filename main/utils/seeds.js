const { User, Thought } = require('../models');

const seedData = async () => {
  try {
    // Create users
    const users = await User.create([
      { username: 'User1', email: 'user1@example.com' },
      { username: 'User2', email: 'user2@example.com' },
      // Add more users as needed
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

    // Assign thoughts to users
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
