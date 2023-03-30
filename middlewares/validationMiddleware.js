const Joi = require("joi");

module.exports = {
  addTodoValidation: (req, res, next) => {
    const schema = Joi.object({
      title: Joi.string().required(),
      categorieId: Joi.string(),
    });

    const validatoinResult = schema.validate(req.body);
    if (validatoinResult.error) {
      return res.status(400).json({
        message: `${validatoinResult.error}`,
      });
    }

    next();
  },

  updateTodoValidatoin: (req, res, next) => {
    const schema = Joi.object({
      title: Joi.string().required(),
    });

    const validatoinResult = schema.validate(req.body);
    if (validatoinResult.error) {
      return res.status(400).json({
        message: `${validatoinResult.error}`,
      });
    }

    next();
  },

  updateStatusTodoValidatoin: (req, res, next) => {
    const schema = Joi.object({
      done: Joi.boolean().required(),
    });

    const validatoinResult = schema.validate(req.body);
    if (validatoinResult.error) {
      return res.status(400).json({
        message: `${validatoinResult.error}`,
      });
    }

    next();
  },

  registerValidation: (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
    });

    const validatoinResult = schema.validate(req.body);
    if (validatoinResult.error) {
      return res.status(400).json({
        message: `${validatoinResult.error}`,
      });
    }

    next();
  },

  loginValidation: (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const validatoinResult = schema.validate(req.body);
    if (validatoinResult.error) {
      return res.status(400).json({
        message: `${validatoinResult.error}`,
      });
    }

    next();
  },

  addCategorieValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      color: Joi.string().required(),
    });

    const validatoinResult = schema.validate(req.body);
    if (validatoinResult.error) {
      return res.status(400).json({
        message: `${validatoinResult.error}`,
      });
    }

    next();
  },
};
