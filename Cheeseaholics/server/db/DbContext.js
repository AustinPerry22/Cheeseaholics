import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { PostSchema } from '../models/Post.js';
import { CommentSchema } from '../models/Comment.js';
import { UpVoteSchema } from '../models/UpVote.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Post = mongoose.model('Post', PostSchema)

  Comment = mongoose.model('Comment', CommentSchema)
  UpVotes = mongoose.model("UpVote", UpVoteSchema)
}

export const dbContext = new DbContext()
