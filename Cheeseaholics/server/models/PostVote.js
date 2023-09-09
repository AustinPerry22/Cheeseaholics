import { Schema } from 'mongoose'

export const PostVoteSchema = new Schema(
    {
        vote: { type: Number, default: 0, required: true },

        authorId: { type: Schema.Types.ObjectId, required: true, ref: 'profileId' },
        voteId: { type: Schema.Types.ObjectId, required: true, ref: 'postVoteId' }
    }, { timestamps: true, toJSON: { virtuals: true } }
)

PostVoteSchema.virtual('profileId', {
    localField: 'authorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})

PostVoteSchema.virtual('postVoteId', {
    localField: 'voteId',
    ref: 'Post',
    foreignField: '_id',
    justOne: true
})