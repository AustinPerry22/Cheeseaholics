import { Schema } from 'mongoose'

export const PostVoteSchema = new Schema(
    {
        vote: { type: Boolean },

        authorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
        PostId: { type: Schema.Types.ObjectId, required: true, ref: 'Post' }
    }, { timestamps: true, toJSON: { virtuals: true } }
)

PostVoteSchema.virtual('profileId', {
    localField: 'authorId',
    ref: 'Account',
    foreignField: 'id',
    justOne: true
})

PostVoteSchema.virtual('Id', {
    localField: 'parentId',
    ref: 'Post' || 'Comment',
    foreignField: 'id',
    justOne: true
})