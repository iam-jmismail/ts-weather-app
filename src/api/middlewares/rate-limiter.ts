import { Request, Response, NextFunction } from "express";
import expressRateLimiter from "express-rate-limit";

export const rateLimiter = (
  duration = 60 * 60 * 1000,
  max_requests = 100,
  message?: string
) =>
  expressRateLimiter({
    windowMs: duration,
    max: max_requests,
    headers: true,
    handler: (req: Request, res: Response, next: NextFunction) => {
      return res.sendTooManyRequestsResponse(
        message ?? "Too many requests from this IP, please try again later"
      );
    },
  });
