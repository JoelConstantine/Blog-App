import type { Post, PostRepository } from '@/domain/Post/index'

type Callbacks = {
  onSuccess: (post: Post) => Post
  onError: (error: unknown) => void
}

type Dependencies = {
  postRepository: PostRepository
}

export default ({ postRepository }: Dependencies) => {
  return async (post: Post, { onSuccess, onError }: Callbacks) => {
    try {
      const newPost = await postRepository.add(post)

      return onSuccess(newPost)
    } catch (error) {
      return onError(error)
    }
  }
}
