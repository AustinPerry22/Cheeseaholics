import { AppState } from "../AppState.js"

export class Post {
  constructor(data) {
    this.title = data.title
    this.description = data.description
    this.cheeseType = data.cheeseType
    this.votes = data.votes
    this.authorId = data.authorId
    this.authorName = data.authorName
    this.authorPicture = data.authorPicture
    this.postId = data._id
  }

  get PostTemplate() {
    return /*html*/ `
                 <div class="card p-2 mx-5 mt-3 shadow">
            <div class="row no-gutters">
              <div class="col-2">
                <img class="card-img position-relative"
                  src=${this.authorPicture}
                  alt="Profile Picture" height="150" style="background-size: cover; background-postion: center;">
                  <span class="position-absolute badge grad-1 fs-5 d-flex flex-row justify-content-center vote-badge">Votes</span>
                  <span class="m-0 p-0 mt-2 position-absolute author-title rounded px-2 shadow">${this.authorName}</span>
              </div>
              <div class="col-10">
                <div class="card-body ">
                
                  <h5 class="card-title  d-flex flex-row justify-content-start post-title m-0 p-0">${this.title}</h5>
                  <span class="d-flex flex-row justify-content-start p-0 m-0"><i class="mdi mdi-cheese p-0 m-0 text-warning me-2"></i> Category: ${this.cheeseType}</span>
                  <p class="card-text p-0 m-0 fs-5 d-flex flex-row justify-content-start">${this.description}</p>
                  <div class="button-container d-flex flex-row justify-content-start mt-2">
                  <button class="btn m-0 p-0 btn-grad px-3 text-white border border-1 border-black shadow">REPLY</button><button class="btn m-0 p-0 btn-grad px-3 text-white border border-1 border-black shadow ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample" onclick="app.PostController.setActivePost('${this.postId}')">SEE THREAD</button>
                  </div>
                  ${this.ComputeDeleteButton}
                </div>
              </div>
            </div>
          </div>`
  }

  get ActivePostTemplate() {
    return `          <div class="card-body border border-2 border-dark rounded p-3 shadow">
            <h5 class="card-title  d-flex flex-row justify-content-start post-title m-0 p-0">${this.title}</h5>
            <span class="d-flex flex-row justify-content-start p-0 m-0"><i
                class="mdi mdi-cheese p-0 m-0 text-warning me-2"></i>
              Category: ${this.cheeseType}</span>
            <p class="card-text p-0 m-0 fs-5 d-flex flex-row justify-content-start">${this.description}</p>
            <div class="button-container d-flex flex-row justify-content-start mt-2">
              <button
                class="btn m-0 p-0 btn-grad px-3 text-white border border-1 border-black shadow">REPLY</button>
            </div>
          </div>
                  <form class="mt-3" onsubmit="app.CommentController.createComment('${this.postId}')">
          <div class="form-group">
            <input type="text" class="form-control" id="commentInput" aria-describedby="commentHelp"
              placeholder="Reply to this post using this response box." name="description">
            <small id="commentHelp" class="form-text text-muted">Remember to be nice.</small>
          </div>
          <button type="submit" class="btn btn-grad text-white border border-1 border-dark shadow">Submit</button>
        </form>`
  }

  get ComputeDeleteButton() {
    if (this.authorId == AppState.account?.id) {
      return `
            <div class="d-flex justify-content-end">
                <i onclick="app.PostController.deletePost('${this.postId}')" class="selectable fs-5 mdi mdi-delete"></i>
            </div>
            `
    } else {
      return ``
    }
  }
}

