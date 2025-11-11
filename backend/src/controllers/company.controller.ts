import type { Request,Response} from "express";
import Company from "../models/companies.model";
import { companyJoi } from "../validations/comapany.joi";

export const createCompany = async (req: Request, res: Response) => {
  const { error } = companyJoi.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    res.status(500).json({ message: "Failed to create company" });
  }
};

export const getCompanies = async (_req: Request, res: Response) => {
  try {
    const companies = await Company.find().sort({ createdAt: -1 });
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch companies" });
  }
};
