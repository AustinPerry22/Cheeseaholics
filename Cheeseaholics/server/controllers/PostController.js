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
            .delete('/:postId', this.deletePost)
    }

    async createPost(request, response, next) {
        try {
            let body = request.body
            body.authorId = request.userInfo.id
            body.authorName = request.userInfo.nickname
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
        } catch (error) {
            next(error)
        }
    }
}