import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";
import { postService } from "../services/PostService.js";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class PostController extends BaseController {
    constructor() {
        super('api/post')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('',)
    }

    async createPost(request, response, next) {
        try {
            let body = request.body
            body.authorId = request.UserInfo._id
            body.authorName = request.UserInfo.nickname
            let newPost = await postService.createPost(body)
            response.send(newPost)
        } catch (error) {
            next(error)
        }
    }
}