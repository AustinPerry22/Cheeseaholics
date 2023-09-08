import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class PostService {
    async deletePost(postId, currentUserId) {
        let postToDelete = await dbContext.Post.findById(postId)
        if (postToDelete.authorId == currentUserId) {
            postToDelete.remove()
            return `POST => ${postToDelete.description} <= HAS BEEN REMOVED`
        } else if (!postToDelete.authorId == currentUserId) {
            throw new BadRequest('Now allowed.')
        }
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