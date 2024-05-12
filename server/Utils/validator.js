const validator = {};

validator.validUserName = (username) => {
  return username.length > 6;
};

validator.validPassword = (password) => {
  return password.length > 6;
};

export default validator;
