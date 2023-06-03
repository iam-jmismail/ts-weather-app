import { JWTAccessTokenExpiryAction, RequestUserMeta } from "@type/common";

interface CustomExpressResponse {
  sendSuccessResponse: (data: any, message?: string) => void;
  sendCreatedResponse: (data?: any, message?: string) => void;
  sendNoContentResponse: () => void;
  sendBadRequestResponse: (data: any, message?: string) => void;
  sendUnAuthorizedResponse: (message?: string, action?: JWTAccessTokenExpiryAction) => void;
  sendForbiddenResponse: () => void;
  sendNotFoundResponse: (message?: string) => void;
  sendUnSupportedMediaResponse: () => void;
  sendExpectationFailedResponse: (
    error: Record<string, string>,
    message?: string
  ) => void;
  sendUnprocessableEntityResponse: (
    errors: Record<string, string>[] | null,
    message?: string
  ) => void;
  sendTooManyRequestsResponse: (message?: string) => void;
  sendConflictResponse: (message?: string) => void
}

declare global {
  namespace Express {
    interface Response extends CustomExpressResponse { }
    interface Request {
      user: RequestUserMeta
    }
  }
}

export { };
