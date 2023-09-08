import { Schema } from "mongoose";

export const PostSchema = new Schema({
    title: { type: String, required: true, maxlength: 120, minlength: 3 },
    description: { type: String, required: true, maxlength: 512, minlength: 4 },
    cheeseType: { type: String, enum: ['cheddar', 'mozzarella', 'american', 'parmesan', 'bleuCheese'] },
    votes: { type: Number, required: true, default: 0 },
    authorId: { type: Schema.Types.ObjectId, required: true, ref: 'profileId' },
    authorName: { type: Schema.Types.String, required: true, ref: 'profileName' },
    authorPicture: { type: Schema.Types.String, required: true, ref: 'profilePicture' }
}, { timestamps: true, toJSON: { virtuals: true } })

PostSchema.virtual('profileId', {
    localField: 'authorId',
    ref: 'Account',
    foreignField: 'id',
    justOne: true
})

PostSchema.virtual('profileName', {
    localField: 'authorName',
    ref: 'Account',
    foreignField: 'nickname',
    justOne: true
})