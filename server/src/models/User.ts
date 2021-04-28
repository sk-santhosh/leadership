import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  profile: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profile: { type: String },
  posts: [{
    type: Schema.Types.ObjectId, ref: "Post"
  }]
});

const User: Model<IUser> = model('User', UserSchema);

export default User;

