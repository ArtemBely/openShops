import mongoose, { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema <IUser>({
   email:{type: String, required: true},
   password: {type: String, required: true}
});

export const User = mongoose.model<IUser>("User", userSchema); // --> TS format
export function createUser(newUser: any, callback: any) {
bcrypt.genSalt(10, function(err: Error, salt: any) {
    bcrypt.hash(newUser.password, salt, function(err: Error, hash: any) {
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}

export function comparePassword(candidatePassword: any, hash: any, callback: any) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}
