const Task = require('./task.model');
const { users } = require('../users/user.memory.repository');

const tasks = [
  new Task({
    title: "Let's celebrate",
    order: 0,
    description: "Let's celebrate",
    userId: users[2].id,
  }),
];

const getAll = async (boardId) =>
  tasks.filter((task) => task.boardId === boardId);

const getTaskById = async (boardId, taskId) =>
  tasks.find((task) => task.id === taskId && task.boardId === boardId);

const createTask = async (boardId, taskData) => {
  const newTask = new Task({ ...taskData, boardId });
  tasks.push(newTask);
  return newTask;
};

const updateTask = async (boardId, taskId, taskData) => {
  const taskToUpdate = tasks.find(
    (task) => task.id === taskId && task.boardId === boardId
  );
  Object.keys(taskData).forEach((key) => {
    taskToUpdate[key] = taskData[key];
  });
  return taskToUpdate;
};

const deleteTask = async (boardId, taskId) => {
  const taskToDelete = tasks.findIndex(
    (task) => task.id === taskId && task.boardId === boardId
  );
  tasks.splice(taskToDelete, 1);
};

const updateTasksOnBoardDelete = async (id) => {
  const filteredTasks = tasks.filter((task) => task.boardId !== id);
  tasks.length = 0;
  tasks.push(...filteredTasks);
};

const updateTaskAssignee = async (id) => {
  tasks.forEach((task) => {
    if (task.userId === id) {
      const taskToupdate = task;
      taskToupdate.userId = null;
    }
  });
};

module.exports = {
  tasks,
  getAll,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  updateTasksOnBoardDelete,
  updateTaskAssignee,
};
