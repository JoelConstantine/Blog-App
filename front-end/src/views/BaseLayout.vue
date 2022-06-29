<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <nav>
      <va-app-bar>
        <va-button icon="home" color="#fff" flat :rounded="false" />
        <va-spacer />
      </va-app-bar>
      <slot name="nav"></slot>
    </nav>
    <main>
      <router-view @save-post="savePost" />
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { usePosts } from '../stores/posts'
import { useRouter } from 'vue-router'
import type { Post } from '../domain/Post'

const router = useRouter()
const postsStore = usePosts()

const savePost = async function (post: Post) {
  const commitedPost = (await postsStore.savePost(post)) as Post
  router.push({ name: 'editPost', params: { postId: commitedPost.id } })
}
</script>

<style lang="scss" scoped></style>
