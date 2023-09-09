import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { Pop } from "../utils/Pop.js";
import { api } from "./AxiosService.js";
import { setHTML } from "../utils/Writer.js";

class PostService {
    setActivePost(postId) {
        let foundPost = AppState.posts.find(post => post.postId == postId)
        // @ts-ignore
        AppState.activePost = foundPost
        console.log(AppState.activePost)
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