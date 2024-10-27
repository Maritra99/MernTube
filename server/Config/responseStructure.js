import CustomError from "../ErrorHandler/customErrorHandler.js";
import httpStatusCode from "./httpStatusCode.js";

const send200SuccessResponse = (res, data, message) => {
  return res.status(httpStatusCode.OK).json({
    status: true,
    data: data,
    message: message,
  });
};

const throwBadRequestError = (errorMessage) => {
  throw new CustomError(errorMessage, httpStatusCode.BAD_REQUEST);
};

const throwUnauthorizedError = (errorMessage) => {
  throw new CustomError(errorMessage, httpStatusCode.UNAUTHORIZE);
};

export { send200SuccessResponse, throwBadRequestError, throwUnauthorizedError };
