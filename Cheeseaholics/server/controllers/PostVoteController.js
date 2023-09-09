import BaseController from "../utils/BaseController.js"
import { postVoteService } from "../services/PostVoteService.js"
import { Auth0Provider } from "@bcwdev/auth0provider"


export class PostVoteController extends BaseController {
    constructor() {
        super('api/postvotes')
        this.router
            .get('', this.getPostVotes)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createVote)
    }

    async getPostVotes(request, response, next) {
        try {
            let posts = await postVoteService.getPostVotes()
        } catch (error) {
            next(error)
        }
    }

    async createVote(request, response, next) {
        try {
            let body = request.body
            const newVote = await postVoteService.createVote(body)
        } catch (error) {
            next(error)
        }
    }
}