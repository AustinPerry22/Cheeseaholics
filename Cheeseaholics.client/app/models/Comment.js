export class Comment {
    constructor(data) {
        this.votes = data.votes
        this.description = data.description
        this.authorId = data.authorId
    }
}