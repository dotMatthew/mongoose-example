import {
  Document, model, Model, Schema,
} from 'mongoose';

export interface IUser extends Document {
  email: String;
  firstName: String;
  lastName: String;
}

export const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

export const User: Model<IUser> = model('User', UserSchema);
