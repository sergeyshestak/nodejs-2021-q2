const router = require('express').Router();
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const {
    params: { id },
  } = req;
  const board = await boardService.getBoardById(id);
  if (board) {
    res.json(board);
  } else {
    res.status(404);
    res.json();
  }
});

router.route('/').post(async (req, res) => {
  const { body } = req;
  const board = await boardService.createBoard(body);
  res.status(201);
  res.json(board);
});

router.route('/:id').put(async (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  const board = await boardService.updateBoard(id, body);
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  const {
    params: { id },
  } = req;
  await boardService.deleteBoard(id);
  res.status(204);
  res.json();
});

module.exports = router;
