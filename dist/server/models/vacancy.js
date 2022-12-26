import { model, Schema } from 'mongoose';
const vacancySchema = new Schema({
    title: { type: String, required: true },
    tag: { type: String, required: true },
    description: { type: String, required: true },
    noExchangeFile: { type: String }
});
export const Vacancy = model("Vacancy", vacancySchema);
