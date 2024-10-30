import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authenticationhelper = {};

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
  return jwt.sign(userData, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_ALLOWED_TIME,
  });
};

export default authenticationhelper;
