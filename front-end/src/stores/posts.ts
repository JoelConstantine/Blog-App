import type { Post, PostList } from './../domain/Post/index'
import { defineStore } from 'pinia'
import { addPost } from '@/container'

export const usePosts = defineStore('posts', {
  state: () => {
    return {
      posts: {} as PostList,
      activePost: {},
    }
  },
  getters: {
    getPostById: (state) => {
      return (id: string) => state.posts[id]
    },
  },
  actions: {
    async savePost(post: Post) {
      return addPost(post, {
        onSuccess: (post: Post) => {
          this.posts[post.id as string] = post
          return post
        },
        onError: (error) => {
          console.log(error)
        },
      })
    },
  },
})
