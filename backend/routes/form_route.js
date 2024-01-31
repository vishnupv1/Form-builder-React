import express from "express";
import formController from "../controllers/formController.js";
const router = express.Router();

router.get("/", formController.getForm);
router.get("/getforms", formController.getForms);
router.get("/getTitle", formController.getTitle);
router.post("/saveForm", formController.saveForm);
router.post("/saveFormData", formController.saveFormData);
router.get("/getquestion", formController.getquestion);



export default router;
