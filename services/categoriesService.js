const { Categorie } = require("../db/categorieModel");

const listCategories = async (userId) => {
  const categores = await Categorie.find({ userId });
  return categores;
};

const getCategorieById = async (categorieId, userId) => {
  const categorie = await Categorie.findOne({ _id: categorieId, userId });
  return categorie;
};

const addCategorie = async (body, userId) => {
  const { name, color } = body;
  const categorie = new Categorie({
    name,
    color,
    userId,
  });

  const result = categorie.save();
  return result;
};

module.exports = {
  listCategories,
  getCategorieById,
  addCategorie,
};
