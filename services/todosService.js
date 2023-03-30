const { Todo } = require("../db/todoModel");

const listTodos = async (userId) => {
  const todos = await Todo.find({ userId });
  return todos;
};

const removeTodo = async (todoId, userId) => {
  const deletedTodo = await Todo.findOneAndRemove({
    _id: todoId,
    userId,
  });
  return deletedTodo;
};

const addTodo = async (body, userId) => {
  const { title, categorieId = "", done = false } = body;
  const todo = new Todo({
    title,
    categorieId,
    done,
    userId,
  });

  const result = todo.save();
  return result;
};

const updateTodo = async (todoId, body, userId) => {
  const { title } = body;

  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: todoId, userId },
    {
      title,
    }
  );
  return updatedTodo;
};

const updateStatusTodo = async (todoId, body, userId) => {
  const { done } = body;

  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: todoId, userId },
    {
      done,
    }
  );
  return updatedTodo;
};

module.exports = {
  listTodos,
  removeTodo,
  addTodo,
  updateTodo,
  updateStatusTodo,
};
