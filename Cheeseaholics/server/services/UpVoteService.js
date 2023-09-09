import { dbContext } from "../db/DbContext.js"



class UpVoteService {
    async getUpVotes() {
        let votes = await dbContext.UpVotes.find()
        return votes
    }
    async createUpVote(body) {
        const newVote = await dbContext.UpVotes.create(body)
        return newVote
    }
}

export const upVoteService = new UpVoteService()