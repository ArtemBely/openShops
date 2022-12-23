import { model, Schema } from 'mongoose';
const projectSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    secondString: { type: String, required: true },
    tag: { type: String, required: true },
    mainArray: { type: Array },
    technicalArray: { type: Array },
    descriptionArray: { type: Array }
});
export const Project = model("Project", projectSchema);
