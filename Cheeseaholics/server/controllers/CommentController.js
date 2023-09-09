import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";
import { BadRequest } from "../utils/Errors.js";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentService } from "../services/CommentService.js";

export class CommentController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
            .get('', this.getCommentsAll)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createComment)
            .delete('/:commentId', this.deleteComment)
    }

    async getCommentsAll(request, response, next) {
        try {
            let comments = await commentService.getCommentsAll()
            response.send(comments)
        } catch (error) {
            next(error)
        }
    }

    async createComment(request, response, next) {
        try {
            let body = request.body
            body.authorId = request.userInfo.id
            body.authorName = request.userInfo.nickname
            body.authorPicture = request.userInfo.picture
            let newComment = await commentService.createComment(body)
            response.send(newComment)
        } catch (error) {
            next(error)
        }
    }

    async deleteComment(request, response, next) {
        try {
            let commentId = request.params.id
            let commentToDelete = await commentService.deleteComment(commentId)
        } catch (error) {
            console.log(error)
        }
    }
}