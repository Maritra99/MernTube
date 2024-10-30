import model from "../Database/model.js";

const authModel = {};

authModel.findUserDataByUserName = async (username) => {
  return await model.userModel.findOne({ username });
};

authModel.saveNewRegistrationToDb = async (userData) => {
  return await model.userModel(userData).save();
};

export default authModel;
