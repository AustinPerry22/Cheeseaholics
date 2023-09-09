// import { Schema } from 'mongoose'

// export const VoteSchema = new Schema(
//     {
//         vote: { type: Boolean },

//         authorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
//         parentId: { type: Schema.Types.ObjectId, required: true }
//     }, { timestamps: true, toJSON: { virtuals: true } }
// )

// VoteSchema.virtual('profileId', {
//     localField: 'authorId',
//     ref: 'Account',
//     foreignField: 'id',
//     justOne: true
// })

// VoteSchema.virtual('virtualParentId', {
//     localField: 'parentId',
//     ref: 'Post' || 'Comment',
//     foreignField: 'id',
//     justOne: true
// })