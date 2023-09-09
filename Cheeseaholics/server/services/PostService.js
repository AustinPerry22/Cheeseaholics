import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class PostService {
    async editPost(postId, currentUserId, dataBody) {
        let postToEdit = await dbContext.Post.findById(postId)
        if (postToEdit.authorId == currentUserId) {
            postToEdit.title = dataBody.title ? dataBody.title : postToEdit.title
            postToEdit.description = dataBody.description ? dataBody.description : postToEdit.description
            postToEdit.cheeseType = dataBody.cheeseType ? dataBody.cheeseType : postToEdit.cheeseType
            await postToEdit.save()
            return postToEdit
        } else if (!postToEdit.authorId == currentUserId) {
            throw new BadRequest('Now allowed.')
        }
    }
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

    async getPosts(query) {
        let posts = await dbContext.Post.find(query)
        return posts
    }

    async getCommentsByPost(query) {

    }

}

export const postService = new PostService()