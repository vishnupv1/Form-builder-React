import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import form_route from "./routes/form_route.js";

dotenv.config();

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.static("backend/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173/"],
    credentials: true,
  })
);

app.use("/", form_route);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
