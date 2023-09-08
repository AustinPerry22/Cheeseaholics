import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class PostService {
    async deletePost(postId) {
        let postToDelete = await dbContext.Post.findById(postId)
        if (!postToDelete) throw new BadRequest('404 Invalid Request.')
        postToDelete.remove()
        return `POST => ${postToDelete.description} <= HAS BEEN REMOVED`
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