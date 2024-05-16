import browserUtils from "./BrowserUtils";
const authUtils = {};

authUtils.isLoggedIn = () => {
  const token = browserUtils.getItemToLocalStorage("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export default authUtils;
