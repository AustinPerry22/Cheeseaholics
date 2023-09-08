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
              </div>
              <div class="col-10">
                <div class="card-body ">
                
                  <h5 class="card-title  d-flex flex-row justify-content-start post-title m-0 p-0">${this.title}</h5>
                  <span class="fs-5 d-flex flex-row justify-content-start p-0 m-0"><i class="mdi mdi-cheese p-0 m-0 text-warning me-2"></i> Category: ${this.cheeseType}</span>
                  <p class="card-text  d-flex flex-row justify-content-start">${this.description}</p>
                <
                </div>
              </div>
            </div>
          </div>`
    }
}

