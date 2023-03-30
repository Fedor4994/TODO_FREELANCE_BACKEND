const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorieSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for categorie"],
    },
    color: {
      type: String,
      required: [true, "Set color for categorie"],
    },
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
    },
  },
  { versionKey: false }
);

const Categorie = mongoose.model("categories", categorieSchema);

module.exports = {
  Categorie,
};
