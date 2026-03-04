var User = require('../models/User');

// Fetch all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    
    const newUser = await User.create({
      name,
      email
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: 'Invalid user data', error: error.message });
  }
};

module.exports = {
  getUsers,
  createUser
};