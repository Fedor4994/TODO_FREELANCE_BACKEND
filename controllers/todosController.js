const {
  listTodos,
  removeTodo,
  addTodo,
  updateTodo,
  updateStatusTodo,
} = require("../services/todosService");

const getTodosController = async (req, res) => {
  const todos = await listTodos(req.user._id);
  res.json(todos);
};

const deleteTodoController = async (req, res) => {
  await removeTodo(req.params.todoId, req.user._id);
  res.status(200).json({ message: "todo deleted" });
};

const addTodoController = async (req, res) => {
  const newTodo = await addTodo(req.body, req.user._id);
  res.status(201).json(newTodo);
};

const updateTodoController = async (req, res, next) => {
  await updateTodo(req.params.todoId, req.body, req.user._id);
  res.status(200).json({ message: "todo updated" });
};

const updateStatusTodoController = async (req, res, next) => {
  if (req.body.done === undefined) {
    return res.status(400).json({ message: "missing field done" });
  }

  await updateStatusTodo(req.params.todoId, req.body, req.user._id);
  res.status(200).json({ message: "todo updated" });
};

module.exports = {
  getTodosController,
  deleteTodoController,
  addTodoController,
  updateTodoController,
  updateStatusTodoController,
};
