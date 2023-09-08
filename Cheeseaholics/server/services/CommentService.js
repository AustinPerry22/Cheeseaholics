import { Schema } from "mongoose";
import { dbContext } from "../db/DbContext.js";
import { logger } from "../utils/Logger.js";
import { BadRequest } from "../utils/Errors.js";

class CommentService {
    async createComment(dataBody) {
        let newComment = await dbContext.Comment.create(dataBody)
        return newComment
    }
    async getComments() {
        let comments = await dbContext.Comment.find()
        return comments
    }
}

export const commentService = new CommentService()