import { model, Schema } from 'mongoose';
const newsSchema = new Schema({
    title: { type: String, required: true },
    tag: { type: String, required: true },
    description: { type: String, required: true }
});
export const News = model("News", newsSchema);
