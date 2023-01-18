<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <RouterLink
        class="router-link"
        to="/crafting/salvager"
      >
        Salvager
      </RouterLink>
    </nav>
    <hr class="sumi-rule-sm" />

    <RouterView />
  </div>
</template>

<style scoped></style>
