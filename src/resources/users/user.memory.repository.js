const User = require('./user.model');

const users = [
  new User({
    name: 'Billy Herrington',
    login: 'Billy Herrington',
    password: 'Billy Herrington',
  }),
  new User({
    name: 'Van Darkholme',
    login: 'Van Sama',
    password: 'Van Sama',
  }),
  new User({
    name: 'Steve Rambo',
    login: 'Steve',
    password: 'Steve',
  }),
];

const getAll = async () => users;

const getUserById = async (id) => users.find((user) => user.id === id);

const createUser = async (userData) => {
  const newUser = new User(userData);
  users.push(newUser);
  return newUser;
};

const updateUser = async (id, userData) => {
  const userToUpdate = users.find((user) => user.id === id);
  Object.keys(userData).forEach((key) => {
    userToUpdate[key] = userData[key];
  });
  return userToUpdate;
};

const deleteUser = async (id) => {
  const userId = users.findIndex((user) => user.id === id);
  users.splice(userId, 1);
};

module.exports = {
  users,
  getAll,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
