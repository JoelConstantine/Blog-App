<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <nav>
      <slot name="nav"></slot>
    </nav>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>