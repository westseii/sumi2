<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="sumi">
    <header>
      <div>
        <nav>
          <RouterLink
            class="router-link"
            to="/"
          >
            Home
          </RouterLink>
          <RouterLink
            class="router-link"
            to="/about"
          >
            About
          </RouterLink>
          <RouterLink
            class="router-link"
            to="/stats"
          >
            Stats
          </RouterLink>
          <RouterLink
            class="router-link"
            to="/crafting"
          >
            Crafting
          </RouterLink>
          <RouterLink
            class="router-link"
            to="/"
          >
            Atlas (nyi)
          </RouterLink>
        </nav>
      </div>
    </header>
    <hr class="sumi-rule" />

    <RouterView />
  </div>
</template>

<style>
  .router-link {
    text-decoration: none;
  }
  .router-link:nth-child(n + 2) {
    margin-left: 10px;
  }
  .router-link-active {
    filter: hue-rotate(270deg);
    text-decoration: underline;
  }
</style>

<style scoped>
  .sumi {
    padding: 10px;
  }
</style>
