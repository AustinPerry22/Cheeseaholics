import mongoose from 'mongoose'

export const VoteSchema = new Schema(
    {
        vote: { type: Boolean },

        authorId: { type: Schema.Types.ObjectId, required: true, ref: 'VoteId' }
    }, { timestamps: true, toJSON: { virtuals: true } }
)

VoteSchema.virtual('profileId', {
    localField: 'authorId',
    ref: 'Account',
    foreignField: 'id',
    justOne: true
})