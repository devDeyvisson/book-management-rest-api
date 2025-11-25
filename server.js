import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import router from "./src/routes/bookRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection?.once("error", (err) => {
  console.error("Failed to connect to MongoDB:", err);
});

app.use("/", router);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send({ error: "Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
