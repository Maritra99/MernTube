import _ from "lodash";

const lodashHelper = {};

lodashHelper.generateTokenPayload = (obj) => {
  return _.pick(obj, ["username"]);
};

lodashHelper.modifyRegistrationResponse = (obj) => {
  return _.pick(obj, ["username"]);
};

export default lodashHelper;
