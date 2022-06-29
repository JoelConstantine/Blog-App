<template>
  <div>
    <h1>Title</h1>
    <va-input v-model="editedPost.title" placeholder="Title"></va-input>
    <h1>Content</h1>
    <va-input
      v-model="editedPost.content"
      type="textarea"
      placeholder="Content"
    ></va-input>
    <h1>Tags</h1>
    <va-button @click="$emit('savePost', editedPost)">Save</va-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { Post } from '@/domain/Post'

export interface EditPostProps {
  post: Post
}

const emits = defineEmits(['savePost'])

const props = defineProps<EditPostProps>()

function makeNewPost(post: Post) {
  let newPost = {}
  return { ...newPost, ...post }
}

let editedPost = reactive(makeNewPost(props.post))

watch(
  () => props.post,
  (post) => {
    console.log('post changed')
    editedPost = reactive(makeNewPost(props.post))
  }
)
</script>
