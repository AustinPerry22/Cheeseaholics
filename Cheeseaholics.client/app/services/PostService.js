import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { Pop } from "../utils/Pop.js";
import { api } from "./AxiosService.js";
import { setHTML } from "../utils/Writer.js";
import { Comment } from "../models/Comment.js";

class PostService {
    async setActivePost(postId) {
        let foundPost = AppState.posts.find(post => post.postId == postId)
        // @ts-ignore
        AppState.activePost = foundPost
        // @ts-ignore
        console.log(AppState.activePost.postId)
        // @ts-ignore
        let res = await api.get(`api/posts/${AppState.activePost.postId}/comments`)
        AppState.activeComments = res.data.map(commentPojo => new Comment(commentPojo))
        console.log(AppState.activeComments)
    }
    async createPost(formData) {
        const res = await api.post('api/posts', formData)
        AppState.posts.push(new Post(res.data))
        AppState.emit('posts')

    }
    async getPosts(cheeseType) {
        try {
            let query = ''
            if (cheeseType) {
                query = `?cheeseType=${cheeseType}`
            }
            let res = await api.get(`api/posts${query}`)
            AppState.posts = res.data.map(post => new Post(post))
            console.log(AppState.posts)
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }
    async deletePost(postId) {
        const response = await api.delete(`api/posts/${postId}`)
        const filteredArray = AppState.posts.filter(post => post.postId != postId)
        AppState.posts = filteredArray
    }
}

export const postService = new PostService()