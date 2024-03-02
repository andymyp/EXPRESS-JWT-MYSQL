const Joi = require('joi');

exports.validateCreate = async (req_body) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(req_body);
};