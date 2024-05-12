import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import model from "../Database/schema.js";

const authenticationhelper = {};

authenticationhelper.findUserDataByUserName = async (username) => {
  return await model.userModel.findOne({ username });
};

authenticationhelper.saveNewRegistrationToDb = async (userData) => {
  return await model.userModel(userData).save();
};

authenticationhelper.verifyPassword = async (
  passwordFromDB,
  enteredPassword
) => {
  return await bcrypt.compare(enteredPassword, passwordFromDB);
};

authenticationhelper.hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};

authenticationhelper.generateToken = (userData) => {
  return jwt.sign(userData, "secret", { expiresIn: 10000000 });
};

export default authenticationhelper;
