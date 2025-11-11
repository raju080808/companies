import Joi from "joi";

export const companyJoi = Joi.object({
  name: Joi.string().required(),
  industry: Joi.string().required(),
  size: Joi.number().min(1).required(),
  location: Joi.string().required(),
});
