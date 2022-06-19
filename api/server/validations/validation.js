import Joi from 'joi'
/**
 * Validator for user details during registration
 * @validator
 */

 export const createUserValidation = Joi.object({
  name: Joi.string().required(),
  phone_number: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(128),
});

export const loginVerification = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(128),
})

export const updateVerification = Joi.object({
  name: Joi.string(),
  phone_number: Joi.string(),
  email: Joi.string().email(),
})

