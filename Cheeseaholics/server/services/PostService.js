import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class PostService {
    deletePost(postId) {

    }
    async createPost(body) {
        let newPost = await dbContext.Post.create(body)
        return newPost
    }

    async getPosts() {
        let posts = dbContext.Post.find()
        return posts
    }

}

export const postService = new PostService()