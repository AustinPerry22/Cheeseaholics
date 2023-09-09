export class Comment {
    constructor(data) {
        this.votes = data.votes
        this.description = data.description
        this.authorId = data.authorId
        this.postId = data.postId
    }

    get CommentTemplate() {
        return `          <div class="card mt-3 comment-card">
            <div class="card-body">
              ${this.description}
            </div>
          </div>`
    }
}