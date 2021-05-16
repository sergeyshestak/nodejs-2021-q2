const router = require('express').Router();
const tasksService = require('./task.service');

router.route('/:boardId/tasks/').get(async (req, res) => {
  const {
    params: { boardId },
  } = req;
  const tasks = await tasksService.getAll(boardId);
  res.json(tasks);
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const {
    params: { boardId, taskId },
  } = req;
  const task = await tasksService.getTaskById(boardId, taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404);
    res.json();
  }
});

router.route('/:boardId/tasks/').post(async (req, res) => {
  const {
    body,
    params: { boardId },
  } = req;
  const task = await tasksService.createTask(boardId, body);
  res.status(201);
  res.json(task);
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const {
    params: { boardId, taskId },
    body,
  } = req;
  const task = await tasksService.updateTask(boardId, taskId, body);
  res.json(task);
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  const {
    params: { boardId, taskId },
  } = req;
  await tasksService.deleteTask(boardId, taskId);
  res.status(204);
  res.json();
});

module.exports = router;
