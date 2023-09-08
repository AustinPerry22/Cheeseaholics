import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";
import { postService } from "../services/PostService.js";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class PostController extends BaseController {
    constructor() {
        super('api/posts')
        this.router
            .get('', this.getPosts)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPost)
            .put('/:postId', this.editPost)
            .delete('/:postId', this.deletePost)
    }

    async createPost(request, response, next) {
        try {
            let body = request.body
            body.authorId = request.userInfo.id
            body.authorName = request.userInfo.nickname
            body.authorPicture = request.userInfo.picture
            let newPost = await postService.createPost(body)
            response.send(newPost)
        } catch (error) {
            next(error)
        }
    }

    async getPosts(request, response, next) {
        try {
            let posts = await postService.getPosts()
            response.send(posts)
        } catch (error) {
            next(error)
        }
    }

    async deletePost(request, response, next) {
        try {
            let postId = request.params.postId
            let currentUserId = request.userInfo.id
            let deletePost = await postService.deletePost(postId, currentUserId)
            response.send(deletePost)
        } catch (error) {
            next(error)
        }
    }

    async editPost(request, response, next) {
        try {
            let postId = request.params.postId
            let currentUserId = request.userInfo.id
            let dataBody = request.body
            let editPost = await postService.editPost(postId, currentUserId, dataBody)
            response.send(editPost)
        } catch (error) {
            next(error)
        }
    }
}