import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./Database/dbConnection.js";
import userRoutes from "./Routes/userRoutes.js";
import authenticationRoutes from "./Routes/authenticationRoutes.js";
import errorMiddleWare from "./ErrorHandler/globalErrorMiddleWare.js";

const app = express();

dotenv.config({ path: "./env/.env" });
const PORT = process.env.PORT;

connectDB();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authenticationRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is Up and Running" });
});

app.use(errorMiddleWare);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
