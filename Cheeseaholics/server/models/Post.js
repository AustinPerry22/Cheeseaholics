import { Schema } from "mongoose";

export const PostSchema = new Schema({
    title: { type: String, required: true, maxlength: 32, minlength: 3 },
    description: { type: String, required: true, maxlength: 256, minlength: 4 },
    likes: { type: Number, required: true, default: 0 },
    dislikes: { type: Number, required: true, default: 0 },
    authorId: { type: Schema.Types.ObjectId, required: true, ref: 'authorId' },
    authorName: { type: Schema.Types.String, required: true, ref: 'authorName' }
}, { timestamps: true, toJSON: { virtuals: true } })

PostSchema.virtual('authorId', {
    localField: 'authorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})

PostSchema.virtual('authorName', {
    localField: 'authorName',
    ref: 'Account',
    foreignField: 'nickname',
    justOne: true
})