
import { model, Schema, Model, Document } from 'mongoose';

export interface IPost extends Document {
  title: string;
  body: string;
  author: string;
  date: Date;
}

const PostSchema: Schema = new Schema({
  title: String,
  body: String,
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  comments: [{ user: { type: Schema.Types.ObjectId, ref: 'User' }, body: String, date: Date }],
  date: { type: Date, default: Date.now },
});

const Post: Model<IPost> = model('Post', PostSchema);

export default Post;