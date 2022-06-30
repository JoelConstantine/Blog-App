import { describe, it, expect } from 'vitest'

import makeAddPost from '../../addPost'

const mockRepository = {
  add: () => {
    return new Promise({ id: '', title: '', content: '', tags: [] })
  },
}

describe('post applications', () => {
  it('should initialize', () => {
    const addPost = makeAddPost({ postRepository: mockRepository })
    expect(addPost).toBeDefined()
  })
})
