import message from "../Config/message.js";
import {
  throwBadRequestError,
  send200SuccessResponse,
} from "../Config/responseStructure.js";
import validator from "../Utils/validator.js";
import authenticationhelper from "../Utils/authenticatorHelper.js";
import catchAsyncError from "../ErrorHandler/catchAsyncError.js";
import lodashHelper from "../Utils/lodashHelper.js";
import authModel from "../Model/authentication.js";

const authenticationController = {};

authenticationController.loginUser = catchAsyncError(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throwBadRequestError(message.ERROR_MESSAGE.USERNAME_PASSWORD_ERROR_MESSAGE);
  }

  if (
    !validator.validUserName(username) ||
    !validator.validPassword(password)
  ) {
    throwBadRequestError(
      message.ERROR_MESSAGE.USERNAME_PASSWORD_INVALID_ERROR_MESSAGE
    );
  }

  const userData = await authModel.findUserDataByUserName(username);

  if (!userData) {
    throwBadRequestError(
      message.ERROR_MESSAGE.USER_NOT_REGISTERED_ERROR_MESSAGE
    );
  }

  const passwordMatched = await authenticationhelper.verifyPassword(
    userData.password,
    password
  );

  if (!passwordMatched) {
    throwBadRequestError(message.ERROR_MESSAGE.WRONG_PASSWORD_ERROR_MESSAGE);
  }

  const modifiedUserData = lodashHelper.generateTokenPayload(userData);

  const token = authenticationhelper.generateToken(modifiedUserData);

  return send200SuccessResponse(
    res,
    token,
    message.SUCCESS_MESSAGE.LOGIN_SUCCESS
  );
});

authenticationController.registerUser = catchAsyncError(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throwBadRequestError(message.ERROR_MESSAGE.USERNAME_PASSWORD_ERROR_MESSAGE);
  }

  if (
    !validator.validUserName(username) ||
    !validator.validPassword(password)
  ) {
    throwBadRequestError(
      message.ERROR_MESSAGE.USERNAME_PASSWORD_INVALID_ERROR_MESSAGE
    );
  }

  const userData = await authModel.findUserDataByUserName(username);

  if (userData) {
    throwBadRequestError(
      message.ERROR_MESSAGE.USER_ALREADY_REGISTERED_ERROR_MESSAGE
    );
  }

  const hashedPassword = await authenticationhelper.hashPassword(password);

  const dataToSaveInDB = {
    username: username,
    password: hashedPassword,
  };

  const newUser = await authModel.saveNewRegistrationToDb(dataToSaveInDB);

  const modifiedNewUser = lodashHelper.modifyRegistrationResponse(newUser);

  return send200SuccessResponse(
    res,
    modifiedNewUser,
    message.SUCCESS_MESSAGE.REGISTRATION_SUCCESS
  );
});

export default authenticationController;
