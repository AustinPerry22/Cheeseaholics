import BaseController from "../utils/BaseController.js"


export class VoteController extends BaseController {
    constructor() {
        super('api/votes')
        this.router
    }

    async postVotes(request, response, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
}