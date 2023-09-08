import mongoose from "mongoose";

export const CommentSchema = new Schema(
    {
        votes: { type: Number, required: true, default: 0 },
        description: { type: String, required: true, maxlength: 100, minlength: 4 }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('profileId', {
    localField: 'authorId',
    ref: 'Account',
    foreignField: 'id',
    justOne: true
})