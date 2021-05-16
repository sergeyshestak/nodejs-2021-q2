const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUserById = (id) => usersRepo.getUserById(id);
const createUser = (userData) => usersRepo.createUser(userData);
const updateUser = (id, userData) => usersRepo.updateUser(id, userData);
const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser };
