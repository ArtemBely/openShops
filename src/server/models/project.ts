import { model, Schema, Document } from 'mongoose';

interface IProject extends Document {
  title: string,
  category: string,
  secondString: string,
  tag: string,
  mainArray: Array<object>,
  technicalArray: Array<object>,
  descriptionArray: Array<object>,
}

const projectSchema = new Schema <IProject>({
    title: { type: String, required: true },
    category: { type: String, required: true },
    secondString: { type: String, required: true },
    tag: { type: String, required: true },
    mainArray: { type:Array },
    technicalArray: { type:Array },
    descriptionArray: { type:Array }
  });

export const Project = model<IProject>("Project", projectSchema);
