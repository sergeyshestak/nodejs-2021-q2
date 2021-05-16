const uuid = require('uuid');
const {users} = require('../users/user.memory.repository');

class Task {
  constructor({
    id = uuid.v4(),
    title = 'TITLE',
    order = 0,
    description = 'DESCRIPTION',
    userId = users[2].id,
    columnId = null,
    boardId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.columnId = columnId;
    this.boardId = boardId;
  }
}

module.exports = Task;
