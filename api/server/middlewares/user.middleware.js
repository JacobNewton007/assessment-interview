import { createUserValidation, loginVerification, updateVerification } from "../validations/validation";
import Util from "../utils/Utils";

const util = new Util();



export async function validateUserCreation (req, res, next) {
  try {
    const valid = await createUserValidation.validateAsync(req.body);
    req.body = valid
    return next()
  } catch (error) {
    util.setError(400, error.message);
    return util.send(res);
  }
}

export async function validateUser(req, res, next) {
  try {
    const valid = await loginVerification.validateAsync(req.body);
    req.body = valid;
    return next()
  } catch (error) {
    util.setError(400, error.message);
    return util.send(res);
  }
}


export async function validateUpdateUser(req, res, next) {
  try {
    const valid = await updateVerification.validateAsync(req.body);
    req.body = valid;
    return next()
  } catch (error) {
    util.setError(400, error.message);
    return util.send(res);
  }
}

