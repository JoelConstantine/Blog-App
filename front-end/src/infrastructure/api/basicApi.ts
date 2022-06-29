import type { Post } from '@/domain/Post/index'
export type ApiService = {
  post: (item: unknown) => Promise<unknown>
}

type RequestWithoutData = (type: string, options: unknown) => Promise<Post>
type RequestWithData = (type: string, options: unknown) => Promise<Post>
type Request = RequestWithData | RequestWithoutData

type Response = {
  data: any
}

const requestWrapper =
  (request: Request): any =>
  async (...args) => {
    try {
      return await request(...args)
    } catch (error) {
      throw handleError(error)
    }
  }

const api = {
  post: async (item: unknown): Promise<Response> => {
    return {
      data: {
        post: item,
      },
    }
  },
}
const handleError = (error: unknown) => {
  return error
}

export const post: Response = requestWrapper(api.post)
