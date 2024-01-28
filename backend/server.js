import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";


const app = express();
dotenv.config();

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

connectDB();

app.use(cors());


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
