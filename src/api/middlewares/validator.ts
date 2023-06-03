import { Request, Response, NextFunction } from "express";
import { validationResult, FieldValidationError } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = errors.array().map((err) => {
    const { path, msg } = <FieldValidationError>err;
    return { [path]: msg };
  });

  return res.sendUnprocessableEntityResponse(extractedErrors);
};

export default validate;
