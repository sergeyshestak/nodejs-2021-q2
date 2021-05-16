const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();
const getBoardById = (id) => boardRepo.getBoardById(id);
const createBoard = (boardData) => boardRepo.createBoard(boardData);
const updateBoard = (id, boardData) => boardRepo.updateBoard(id, boardData);
const deleteBoard = (id) => boardRepo.deleteBoard(id);

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard,
};
