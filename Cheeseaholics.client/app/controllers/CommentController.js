import { AppState } from "../AppState.js";
import { commentService } from "../services/CommentService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js"

export class CommentController {
    constructor() {
        console.log('Comment Controller');
        this.getComments()
        AppState.on('activePost', this.getComments)
        AppState.on('activePost', this.drawComments)
    }

    async getComments() {
        await commentService.getComments()
        this.drawComments()
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
    }

    async drawComments() {
        let content = ''
        // @ts-ignore
        console.log(`${AppState.comments} COMMENTS`)
    }
}