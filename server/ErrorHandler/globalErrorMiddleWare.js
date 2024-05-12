import httpStatusCode from "../Config/httpStatusCode.js";
import message from "../Config/message.js";

const developmentError = (res, error, errorCode, errorMessage) => {
  return res
    .status(errorCode)
    .json({ status: false, message: errorMessage, stack: error.stack });
};

const productionError = (res, error, errorCode, errorMessage) => {
  if (error.isOperational) {
    return res.status(errorCode).json({ status: false, message: errorMessage });
  } else {
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: message.ERROR_MESSAGE.INTERNAL_SERVER_ERROR,
    });
  }
};

const errorMiddleWare = (error, req, res, next) => {
  const errorMessage =
    error.message || message.ERROR_MESSAGE.INTERNAL_SERVER_ERROR;
  const errorCode = error.status || httpStatusCode.INTERNAL_SERVER_ERROR;

  if (process.env.NODE_ENV.toLowerCase() === "production") {
    productionError(res, error, errorCode, errorMessage);
  } else {
    developmentError(res, error, errorCode, errorMessage);
  }
};

export default errorMiddleWare;
