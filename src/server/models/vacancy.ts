import { model, Schema, Document } from 'mongoose';

interface IVacancy extends Document {
  title: string,
  tag: string,
  description: string,
  noExchangeFile: string
}

const vacancySchema = new Schema <IVacancy>({
    title: { type: String, required: true },
    tag: { type: String, required: true },
    description: { type: String, required: true },
    noExchangeFile: { type: String }
  });

export const Vacancy = model<IVacancy>("Vacancy", vacancySchema);
