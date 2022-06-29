import * as ApiService from '@/infrastructure/api/basicApi'
import makePostsRepository from './infrastructure/posts/postsRepository'
import makeAddPosts from './application/addPoss'

// Repos
const postRepository = makePostsRepository({
  ApiService,
})

// Actions
const addPost = makeAddPosts({
  postRepository,
})

export { addPost }
