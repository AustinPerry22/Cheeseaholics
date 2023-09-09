import { Schema } from 'mongoose'

export const UpVoteSchema = new Schema(
    {
        authorId: { type: Schema.Types.ObjectId, required: true, ref: 'profileId' },
        upVoteId: { type: Schema.Types.ObjectId, required: true, ref: 'VoteId' }
    }, { timestamps: true, toJSON: { virtuals: true } }
)

UpVoteSchema.virtual('profileId', {
    localField: 'authorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})

UpVoteSchema.virtual('VoteId', {
    localField: 'upVoteId',
    ref: 'Post',
    foreignField: '_id',
    justOne: true
})