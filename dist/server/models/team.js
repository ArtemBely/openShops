import { model, Schema } from 'mongoose';
const teamSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true }
});
export const Team = model("Team", teamSchema);
