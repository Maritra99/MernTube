const browserUtils = {};

browserUtils.getItemToLocalStorage = (key) => {
  return localStorage.getItem(key);
};
browserUtils.setItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export default browserUtils;
