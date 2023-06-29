const { User, Thought } = require('../models');

const generateUsers = async (userCount) => {
  const users = [];
  for (let i = 0; i < userCount; i++) {
    const username = `User${i + 1}`;
    const email = `user${i + 1}@example.com`;
    const newUser = await User.create({ username, email });
    users.push(newUser);
  }
  return users;
};

const generateThoughts = async (thoughtCount, users) => {
  const thoughts = [];
  for (let i = 0; i < thoughtCount; i++) {
    const thoughtText = `Thought ${i + 1}`;
    const username = users[Math.floor(Math.random() * users.length)].username;
    const newThought = await Thought.create({ thoughtText, username });
    thoughts.push(newThought);
  }
  return thoughts;
};

const addThoughtsToUsers = async (thoughts, users) => {
  for (let i = 0; i < users.length; i++) {
    const randomThoughts = getRandomItemsFromArray(thoughts, 5); // Assign 5 random thoughts to each user
    users[i].thoughts = randomThoughts.map((thought) => thought._id);
    await users[i].save();
  }
};

const getRandomItemsFromArray = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const seedData = async () => {
  try {
    // Generate users
    const users = await generateUsers(10);

    // Generate thoughts
    const thoughts = await generateThoughts(20, users);

    // Add thoughts to users
    await addThoughtsToUsers(thoughts, users);

    console.log('Data seeding completed successfully.');
  } catch (err) {
    console.error('Data seeding failed:', err);
  }
};

module.exports = seedData;
