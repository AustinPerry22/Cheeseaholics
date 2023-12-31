import { AppState } from "../AppState.js";
import { commentService } from "../services/CommentService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js"
import { postService } from "../services/PostService.js";

export class CommentController {
    constructor() {
        AppState.on('activeComments', this.drawComment)
        AppState.on('activeComments', this.getComments)
    }

    async getComments() {
        await commentService.getComments()
    }

    async createComment(postId) {
        // @ts-ignore
        window.event.preventDefault()
        // @ts-ignore
        let form = window.event.target
        const formData = getFormData(form)
        // @ts-ignore
        formData.postId = postId
        // @ts-ignore
        // console.log(formData.postId)
        await commentService.createComment(formData)
        postService.setActivePost(postId)
        this.drawComment()
    }

    drawComment() {
        let content = ''
        AppState.activeComments.reverse()
        AppState.activeComments.forEach(comment => content += comment.CommentTemplate)
        setHTML('active-post-comment-container', content)
    }

    async deleteComment(cId) {

        try {
            const yes = await Pop.confirm("Remove this comment?")
            if (yes) {
                commentService.deleteComment(cId)
            }
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }

}