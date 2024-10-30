import schema from "./schema.js"
import mongoose from "./instance.js";

const model = {};

model.createModel = () => {
  for (let collectionName in schema) {
    if (schema.hasOwnProperty(collectionName)) {
      model[`${collectionName}Model`] = mongoose.model(
        collectionName,
        schema[collectionName]
      );
    }
  }
};

export default model;