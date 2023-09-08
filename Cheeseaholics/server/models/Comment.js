import { Schema } from "mongoose"
import { Mongoose } from "mongoose"
export const CommentSchema = new Schema(
    {
        votes: { type: Number, required: true, default: 0 },
        description: { type: String, required: true, maxlength: 100, minlength: 4 },
        authorId: { type: Schema.Types.ObjectId, required: true, ref: "profileId" }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('profileId', {
    localField: 'authorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})

CommentSchema.virtual('postId', {
    localField: 'authorId',
    ref: 'Post',
    foreignField: '_id',
    justOne: true
})