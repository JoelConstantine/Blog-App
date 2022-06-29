import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from 'vue-router'
import * as Post from '@/domain/Post'
import { usePosts } from '@/stores/posts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'addPost' },
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/BaseLayout.vue'),
      children: [
        {
          path: 'add',
          name: 'addPost',
          component: () => import('../views/Posts/EditPost.vue'),
          props: {
            post: Post.create(),
          },
        },
        {
          path: 'edit/:postId',
          name: 'editPost',
          component: () => import('../views/Posts/EditPost.vue'),
          props: (route: RouteLocationNormalized) => {
            const store = usePosts()
            const postId: string = route.params.postId as string
            const post = store.getPostById(postId)
            if (!post) {
              router.push('/posts/add')
            }

            return {
              post: Post.create(store.getPostById(postId)),
            }
          },
        },
      ],
    },
  ],
})

export default router
