import express from "express";
import formController from "../controllers/formController.js";
const router = express.Router();


router.get("/", formController.getForm);

export default router;
