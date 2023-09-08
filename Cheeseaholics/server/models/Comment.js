import { Schema } from "mongoose"
import { Mongoose } from "mongoose"
export const CommentSchema = new Schema(
    {
        votes: { type: Number, required: true, default: 0 },
        description: { type: String, required: true, maxlength: 100, minlength: 4 },
        authorId: { type: Schema.Types.ObjectId, required: true, ref: "profileId" },
        authorName: { type: Schema.Types.String, required: true, ref: 'profileName' },
        authorPicture: { type: Schema.Types.String, required: true, ref: 'profilePicture' },
        postId: { type: Schema.Types.ObjectId, required: true, ref: "thisPostId" }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('profileName', {
    localField: 'authorName',
    ref: 'Account',
    foreignField: 'nickname',
    justOne: true
})

CommentSchema.virtual('profilePicture', {
    localField: 'authorPicture',
    ref: 'Account',
    foreignField: 'picture',
    justOne: true
})

CommentSchema.virtual('profileId', {
    localField: 'authorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})

CommentSchema.virtual('thisPostId', {
    localField: 'postId',
    ref: 'Post',
    foreignField: 'id',
    justOne: true
})