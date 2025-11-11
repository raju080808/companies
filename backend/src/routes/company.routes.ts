import { Router } from "express";
import { createCompany, getCompanies } from "../controllers/company.controller.js";

const router = Router();

router.get("/get", getCompanies);
router.post("/post", createCompany);

export default router;
