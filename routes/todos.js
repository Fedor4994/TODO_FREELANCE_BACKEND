const express = require("express");

const {
  getTodosController,
  deleteTodoController,
  addTodoController,
  updateTodoController,
  updateStatusTodoController,
} = require("../controllers/todosController");
const {
  addTodoValidation,
  updateTodoValidatoin,
  updateStatusTodoValidatoin,
} = require("../middlewares/validationMiddleware.js");

const { authMiddleware } = require("../middlewares/authMiddleware");
const { asyncWrapper } = require("../helpers/apiHelpers");

const router = express.Router();

router.use(authMiddleware);

router.get("/", asyncWrapper(getTodosController));
router.delete("/:todoId", asyncWrapper(deleteTodoController));
router.post("/", addTodoValidation, asyncWrapper(addTodoController));
router.put(
  "/:todoId",
  updateTodoValidatoin,
  asyncWrapper(updateTodoController)
);
router.patch(
  "/:todoId/done",
  updateStatusTodoValidatoin,
  asyncWrapper(updateStatusTodoController)
);

module.exports = router;
