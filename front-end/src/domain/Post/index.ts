export type Post = {
  id?: string
  title?: string
  content?: string
  tags?: string[]
}

export interface PostList {
  [index: string]: Post
}

export type PostRepository = {
  add: (post: Post) => Promise<Post>
}

export const create = (post?: Post) => {
  return {
    id: post?.id,
    title: post?.title,
    content: post?.content,
    tags: post?.tags,
  }
}
