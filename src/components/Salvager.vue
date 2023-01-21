<script setup>
  import { ref } from "vue";
  import { material } from "../../public/game/ashfalle.js";

  const salvageArray = ref([]);
</script>

<template>
  <div>
    <div class="sumi-pane">
      <h2>Salvager</h2>
      <hr class="sumi-rule-sm" />

      <div>{{ material.getMaterialQualityDataByTier(3) }}</div>
    </div>
  </div>
</template>

<style scoped></style>
