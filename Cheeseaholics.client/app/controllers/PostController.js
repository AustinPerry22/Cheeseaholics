import { AppState } from "../AppState.js";
import { postService } from "../services/PostService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js"


function _drawPosts() {
    let content = ''
    let posts = AppState.posts
    posts.forEach(post => content += post.PostTemplate)
    setHTML('post-container', content)
}

function _drawCreatePost() {
    let content = `<button class="btn btn-success w-75 rounded-5 fs-4 fw-bolder mt-5" data-bs-toggle="modal"
    data-bs-target="#exampleModal" data-whatever="@mdo">CREATE POST</button>`
    setHTML('createPost', content)
}

export class PostController {
    constructor() {
        console.log('Post Controller');
        this.getPosts()
        AppState.on('account', _drawPosts)
        AppState.on('account', _drawCreatePost)
        AppState.on('posts', _drawPosts)
        // AppState.on('activePost', _drawActivePost)
    }

    async getPosts(cheeseType) {
        try {
            console.log(cheeseType)
            await postService.getPosts(cheeseType)
        } catch (error) {
            Pop.error(error)
            console.log(error);
        }
    }

    async createPost() {
        try {
            console.log('creatingPost')
            // @ts-ignore
            window.event.preventDefault()
            // @ts-ignore
            const form = window.event.target
            const formData = getFormData(form)
            await postService.createPost(formData)
        } catch (error) {
            Pop.error(error)
        }
    }

    async setActivePost(postId) {
        await postService.setActivePost(postId)
        let activePost = AppState.activePost
        // @ts-ignore
        setHTML('active-post-container', activePost.ActivePostTemplate)
    }
    async deletePost(postId) {

        try {
            const yes = await Pop.confirm("Remove this post?")
            if (yes) {
                postService.deletePost(postId)
            }
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }

}