import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { Pop } from "../utils/Pop.js";
import { api } from "./AxiosService.js";
import { setHTML } from "../utils/Writer.js";

class CommentService {
    async getComments() {
        let res = await api.get('api/comments')
        console.log(res.data)
    }
    async createComment(formData) {
        const res = await api.post('api/comments', formData)
        // @ts-ignore
        AppState.comments.push(new Comment(res.data))
        AppState.emit('comments')
    }

}

export const commentService = new CommentService()