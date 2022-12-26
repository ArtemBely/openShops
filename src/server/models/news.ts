import { model, Schema, Document } from 'mongoose';

interface INews extends Document {
  title: string,
  tag: string,
  description: string,
  noExchangeFile: string
}

const newsSchema = new Schema <INews>({
    title: { type: String, required: true },
    tag: { type: String, required: true },
    description: { type: String, required: true },
    noExchangeFile: { type: String }
  });

export const News = model<INews>("News", newsSchema);
