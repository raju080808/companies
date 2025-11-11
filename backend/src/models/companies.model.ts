import mongoose, { Schema, Document } from "mongoose";

export interface ICompany extends Document {
  name: string;
  industry: string;
  size: number;
  location: string;
}

const companySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    industry: { type: String, required: true },
    size: { type: Number, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ICompany>("Company", companySchema);
