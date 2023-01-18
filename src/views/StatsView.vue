<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <RouterLink
        class="router-link"
        to="/stats/attributes"
      >
        Attributes
      </RouterLink>
      <RouterLink
        class="router-link"
        to="/stats/skills"
      >
        Skills
      </RouterLink>
      <RouterLink
        class="router-link"
        to="/"
      >
        Prodigy (nyi)
      </RouterLink>
    </nav>
    <hr class="sumi-rule-sm" />

    <RouterView />
  </div>
</template>

<style scoped></style>
