const userController = {};

userController.loginUser = (req, res) => {
  return res.status(200).json({ message: "Login Successful" });
};

export default userController;
