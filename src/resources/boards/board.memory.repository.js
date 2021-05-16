const Board = require('./board.model');

const boards = [
  new Board({
    title: 'Prikol',
    columns: [
      { title: 'Ugar', order: 123 },
      { title: 'Prikol ugar', order: 2 },
    ],
  }),
];

const getAll = async () => boards;

const getBoardById = async (id) => boards.find((board) => board.id === id);

const createBoard = async (boardData) => {
  const newBoard = new Board(boardData);
  boards.push(newBoard);
  return newBoard;
};

const updateBoard = async (id, boardData) => {
  const boardToUpdate = boards.find((board) => board.id === id);
  Object.keys(boardData).forEach((key) => {
    boardToUpdate[key] = boardData[key];
  });
  return boardToUpdate;
};

const deleteBoard = async (id) => {
  const boardId = boards.findIndex((board) => board.id === id);
  boards.splice(boardId, 1);
};

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard,
};
