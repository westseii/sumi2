<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav class="nav">
      <RouterLink
        class="router-link"
        to="/crafting/salvager"
      >
        Salvager
      </RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
  .nav {
    margin-bottom: 10px;
  }
</style>
