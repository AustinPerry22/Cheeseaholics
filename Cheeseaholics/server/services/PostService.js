import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class PostService {
    async createPost(body) {
        let newPost = await dbContext.Post.create(body)
        return newPost
    }

}

export const postService = new PostService()