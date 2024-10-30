import mongoose from "./instance.js";
import model from "./model.js";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  try {
    await mongoose.connect(MONGO_URI);
    model.createModel();
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(`Database Connection Failed With Message: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
