import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { Pop } from "../utils/Pop.js";
import { api } from "./AxiosService.js";

class PostService {
    async getPosts() {
        try {
            let res = await api.get('api/posts')
            AppState.posts = res.data.map(post => new Post(post))
            console.log(AppState.posts)
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }
}

export const postService = new PostService()