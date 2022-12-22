import { model, Schema, Document } from 'mongoose';

interface IVacancy extends Document {
  title: string,
  tag: string,
  description: string
}

const vacancySchema = new Schema <IVacancy>({
    title: { type: String, required: true },
    tag: { type: String, required: true },
    description: { type: String, required: true }
  });

export const Vacancy = model<IVacancy>("Vacancy", vacancySchema);
