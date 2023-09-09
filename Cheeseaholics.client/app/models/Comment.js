export class Comment {
  constructor(data) {
    this.votes = data.votes
    this.description = data.description
    this.authorId = data.authorId
    this.postId = data.postId
    this.name = data.authorName
  }

  get CommentTemplate() {
    return `          <div class="card p-0 m-0 mt-3 comment-card">
            <div class="card-body p-0 m-0 ms-4 my-3">
              ${this.description}
            </div>
            <span class="p-2 ms-4 text-white badge grad-1 w-25 my-3 border border-1 border-dark">${this.name}</span>
          </div>`
  }
}