const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await usersService.getUserById(id);
  res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const { body } = req;
  const user = await usersService.createUser(body);
  res.status(201);
  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  const user = await usersService.updateUser(id, body);
  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const {
    params: { id },
  } = req;
  await usersService.deleteUser(id);
  res.status(204);
  res.json();
});

module.exports = router;
