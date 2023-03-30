const express = require("express");

const {
  getCategoriesController,
  getCategorieByIdController,
  addCategorieController,
} = require("../controllers/categoriesController");
const {
  addCategorieValidation,
} = require("../middlewares/validationMiddleware.js");

const { authMiddleware } = require("../middlewares/authMiddleware");
const { asyncWrapper } = require("../helpers/apiHelpers");

const router = express.Router();

router.use(authMiddleware);

router.get("/", asyncWrapper(getCategoriesController));
router.get("/:categorieId", asyncWrapper(getCategorieByIdController));
router.post("/", addCategorieValidation, asyncWrapper(addCategorieController));

module.exports = router;
