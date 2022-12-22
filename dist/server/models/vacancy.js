import { model, Schema } from 'mongoose';
const vacancySchema = new Schema({
    title: { type: String, required: true },
    tag: { type: String, required: true },
    description: { type: String, required: true }
});
export const Vacancy = model("Vacancy", vacancySchema);
