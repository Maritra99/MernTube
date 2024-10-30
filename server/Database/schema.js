import mongoose from "./instance.js";
const schema = {};

const Schema = mongoose.Schema;

schema.user = Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true, collection: "users" }
);

export default schema;
