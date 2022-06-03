
<template>
  <BaseLayout>
    <template #header>
      <va-app-bar>
        <va-button icon="home" color="#fff" flat :rounded="false" />
        <va-spacer />
      </va-app-bar>
    </template>
    <template #main>
      <RouterView />
    </template>
  </BaseLayout>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import BaseLayout from "@/views/BaseLayout.vue"
</script>



<style lang='scss'>
@import "@/style/main.scss";

#app {
  font-weight: normal;
}
</style>
