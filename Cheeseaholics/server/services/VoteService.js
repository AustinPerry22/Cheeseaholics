class PostVoteService {
    async getVotes() {
        let votes = await dbContext.Vote.find()
        return votes
    }
}

export const voteService = new postVoteService()