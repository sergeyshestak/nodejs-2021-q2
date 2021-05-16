const taskRepo = require('./task.memory.repository');

const getAll = (boardId) => taskRepo.getAll(boardId);
const getTaskById = (boardId, taskId) => taskRepo.getTaskById(boardId, taskId);
const createTask = (boardId, taskData) =>
  taskRepo.createTask(boardId, taskData);
const updateTask = (boardId, taskId, taskData) =>
  taskRepo.updateTask(boardId, taskId, taskData);
const deleteTask = (boardId, taskId) => taskRepo.deleteTask(boardId, taskId);

module.exports = { getAll, getTaskById, createTask, updateTask, deleteTask };
