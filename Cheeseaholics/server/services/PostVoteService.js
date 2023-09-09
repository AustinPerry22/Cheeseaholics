import { dbContext } from "../db/DbContext.js"



class PostVoteService {
    async getPostVotes() {
        let votes = await dbContext.Votes.find()
        return votes
    }
    async createVote(body) {
        const newVote = await dbContext.Votes.create(body)
        return newVote
    }
}

export const postVoteService = new PostVoteService()