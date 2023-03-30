const {
  listCategories,
  getCategorieById,
  addCategorie,
} = require("../services/categoriesService");

const getCategoriesController = async (req, res) => {
  const categories = await listCategories(req.user._id);
  res.json(categories);
};

const getCategorieByIdController = async (req, res) => {
  const categorie = await getCategorieById(
    req.params.categorieId,
    req.user._id
  );
  categorie
    ? res.status(200).json(categorie)
    : res.status(404).json({ message: "Not found" });
};

const addCategorieController = async (req, res) => {
  const newCategorie = await addCategorie(req.body, req.user._id);
  res.status(201).json(newCategorie);
};

module.exports = {
  getCategoriesController,
  getCategorieByIdController,
  addCategorieController,
};
