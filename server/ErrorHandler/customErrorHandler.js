class CustomError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.message = message;
    this.status = errorCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;
