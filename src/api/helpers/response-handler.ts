import { Request, Response, NextFunction } from "express";
import { ApiResponseData, JWTAccessTokenExpiryAction } from "../types";
import { RESPONSE_CODES } from "@config/*";

/**
 * Response codes are referrenced from
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */

export function responseHandler(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  /**
   * 200 OK - The request succeeded.
   * The request succeeded. The result meaning of "success" depends on the HTTP methods: GET, POST, PUT or DELETE
   */
  res.sendSuccessResponse = function (data: any, message?: string): Response {
    const responseData = {
      status: "SUCCESS",
      message: message ?? "Request completed successfully",
      data,
    };
    return res.status(RESPONSE_CODES.SUCCESS).json(responseData);
  };

  /**
   * 201 Created
   * The request succeeded, and a new resource was created as a result.
   * This is typically the response sent after POST requests, or some PUT requests.
   */

  res.sendCreatedResponse = function (data?: any, message?: string): Response {
    const responseData = <ApiResponseData>{
      status: "SUCCESS",
      message: message ?? "Request completed successfully",
    };

    if (data) responseData.data = data;
    return res.status(RESPONSE_CODES.CREATED).json(responseData);
  };

  /**
   * 204 No Content
   * There is no content to send for this request, but the headers may be useful.
   */

  res.sendNoContentResponse = function (): Response {
    return res.status(RESPONSE_CODES.NO_CONTENT);
  };

  /**
   * 400 Bad Request
   * The server cannot or will not process the request due to something that is perceived to be a client error
   */

  res.sendBadRequestResponse = function (
    error: any,
    message?: string
  ): Response {
    const responseData = {
      status: "ERROR",
      message: message ?? "An error occurred",
      error,
    };
    return res.status(RESPONSE_CODES.BAD_REQUEST).json(responseData);
  };

  /**
   * 401 Unauthorized
   *  The client must authenticate itself to get the requested response.
   */

  res.sendUnAuthorizedResponse = function (message: string = "Unauthorized", action: JWTAccessTokenExpiryAction = 'LOGIN'): Response {
    const responseData = {
      status: "UNAUTHORIZED",
      action,
      message,
    };
    return res.status(RESPONSE_CODES.UN_AUTHORIZED).json(responseData);
  };

  /**
   * 403 Forbidden
   * The client does not have access rights to the content.
   */

  res.sendForbiddenResponse = function (): Response {
    const responseData = {
      status: "FORBIDDEN",
      message: "You are forbidden to access this resource.",
    };
    return res.status(RESPONSE_CODES.FORBIDDEN).json(responseData);
  };

  /**
   * 404 - Not Found
   * Cannot find the requested resource
   */

  res.sendNotFoundResponse = function (message = "Resource not found"): Response {
    const responseData = {
      status: "NOT_FOUND",
      message,
    };
    return res.status(RESPONSE_CODES.NOT_FOUND).json(responseData);
  };

  /**
   * 409 - Conflict 
   */

  res.sendConflictResponse = function (message?: string): Response {
    const responseData = {
      status: "CONFLICT",
      message: message ?? "Conflict with target resource",
    };
    return res.status(RESPONSE_CODES.CONFLICT).json(responseData);
  };

  /**
   * 415 Unsupported Media Type
   * The media format of the requested data is not supported by the server
   */

  res.sendUnSupportedMediaResponse = function (): Response {
    const responseData = {
      status: "ERROR",
      message: "Unsupported media type",
    };
    return res.status(RESPONSE_CODES.UNSUPPORTED_MEDIATYPE).json(responseData);
  };

  /**
   * 417 - Expectation Failed
   * Server understands request does not support this feature
   * Eg: Request payload too large
   */

  res.sendExpectationFailedResponse = function (
    error: Record<string, string>,
    message?: string
  ): Response {
    const responseData = {
      status: "ERROR",
      message: message ?? "Expectation Failed",
      error,
    };
    return res.status(RESPONSE_CODES.EXPECTATION_FAILED).json(responseData);
  };

  /**
   * 422 - Unprocessable Entity
   * Request contains semantic errors ( Validation Errors ).
   */
  res.sendUnprocessableEntityResponse = function (
    errors: Record<string, string>[],
    message?: string
  ): Response {
    const responseData = {
      status: "ERROR",
      message: message ?? "Validation error",
      errors,
    };
    return res.status(RESPONSE_CODES.UN_PROCESSABLE_ENTITY).json(responseData);
  };

  /**
   * 429 Too Many Requests
   * The user has sent too many requests in a given amount of time ("rate limiting").
   */

  res.sendTooManyRequestsResponse = function (message?: string): Response {
    const responseData = {
      status: "ERROR",
      message: message ?? "Too Many Requests",
    };
    return res.status(RESPONSE_CODES.TOO_MANY_REQUESTS).json(responseData);
  };

  next();
}
