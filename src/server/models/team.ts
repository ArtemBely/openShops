import { model, Schema, Document } from 'mongoose';

interface ITeam extends Document {
  name: string,
  title: string
}

const teamSchema = new Schema <ITeam>({
    name: { type: String, required: true },
    title: { type: String, required: true }
  });

export const Team = model<ITeam>("Team", teamSchema);
