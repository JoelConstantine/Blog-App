import * as apiService from '@/infrastructure/api/basicApi'
import makePostsRepository from './infrastructure/posts/postsRepository'
import makeAddPosts from './application/addPost'

// Repos
const postRepository = makePostsRepository({
  apiService,
})

// Actions
const addPost = makeAddPosts({
  postRepository,
})

export { addPost }
