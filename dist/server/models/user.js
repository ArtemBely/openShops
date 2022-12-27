import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});
export const User = mongoose.model("User", userSchema); // --> TS format
export function createUser(newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}
export function comparePassword(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err)
            throw err;
        callback(null, isMatch);
    });
}
