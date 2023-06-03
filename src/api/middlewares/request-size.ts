import { MAX_REQUEST_SIZE, RESPONSE_CODES } from "@config/*";
import { Request, Response, NextFunction } from "express";

export function requestSizeHandler(
  // err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (+res.status === RESPONSE_CODES.EXPECTATION_FAILED) {
    return res.sendExpectationFailedResponse({
      error: "Request payload too large",
      message: `Maximum request size allowed is ${MAX_REQUEST_SIZE} bytes`,
    });
  }
  next();
}
