import { model, Schema } from "mongoose";
const teamSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    noExchangeFile: { type: String },
});
export const Team = model("Team", teamSchema);
