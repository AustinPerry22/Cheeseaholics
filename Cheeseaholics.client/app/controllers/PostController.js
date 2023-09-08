import { AppState } from "../AppState.js";
import { postService } from "../services/PostService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawPosts() {
    let content = ''
    let posts = AppState.posts
    posts.forEach(post => content += post.PostTemplate)
    setHTML('post-container', content)
}

export class PostController {
    constructor() {
        console.log('Post Controller');
        this.getPosts()
        AppState.on('posts', _drawPosts)
    }

    async getPosts() {
        try {
            await postService.getPosts()
        } catch (error) {
            Pop.error(error)
            console.log(error);
        }
    }

}