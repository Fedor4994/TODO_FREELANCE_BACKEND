const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set name for todo"],
    },
    done: {
      type: Boolean,
      default: false,
    },
    categorieId: {
      type: String,
    },
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
    },
  },
  { versionKey: false }
);

const Todo = mongoose.model("todos", todoSchema);

module.exports = {
  Todo,
};
