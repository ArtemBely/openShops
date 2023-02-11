import { model, Schema, Document } from "mongoose";

export interface ITeam extends Document {
  name: string;
  title: string;
  noExchangeFile: string;
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true },
  title: { type: String, required: true },
  noExchangeFile: { type: String },
});

export const Team = model<ITeam>("Team", teamSchema);
