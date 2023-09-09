import BaseController from "../utils/BaseController.js"
import { upVoteService } from "../services/UpVoteService.js"
import { Auth0Provider } from "@bcwdev/auth0provider"


export class UpVoteController extends BaseController {
    constructor() {
        super('api/upvotes')
        this.router
            .get('', this.getUpVotes
                .use(Auth0Provider.getAuthorizedUserInfo)
                .post('', this.createUpVote)
    }

    async getUpVotes(request, response, next) {
        try {
            let posts = await upVoteService.getUpVotes()
        } catch (error) {
            next(error)
        }
    }

    async createUpVote(request, response, next) {
        try {
            let body = request.body
            const newVote = await upVoteService.createUpVote(body)
        } catch (error) {
            next(error)
        }
    }
}