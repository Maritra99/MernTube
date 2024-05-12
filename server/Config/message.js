const message = {};
const errorMessage = (message.ERROR_MESSAGE = {});
const successMessage = (message.SUCCESS_MESSAGE = {});

errorMessage.GENERIC_ERROR_MESSAGE = "Internal Server Error";
errorMessage.USERNAME_PASSWORD_ERROR_MESSAGE =
  "Username and Password is Required";
errorMessage.USERNAME_PASSWORD_INVALID_ERROR_MESSAGE =
  "Username and Password is Not Valid";
errorMessage.USER_NOT_REGISTERED_ERROR_MESSAGE = "Invalid Username or Password";
errorMessage.USER_ALREADY_REGISTERED_ERROR_MESSAGE = "User Already Registered";
errorMessage.WRONG_PASSWORD_ERROR_MESSAGE = "Invalid Username or Password";

successMessage.REGISTRATION_SUCCESS = "Successfully Registered";
successMessage.LOGIN_SUCCESS = "Successfully Logged In";

export default message;
