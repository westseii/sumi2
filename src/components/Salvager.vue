<script setup>
  import { gatherable, material } from "../../public/game/ashfalle.js";
</script>

<template>
  <div>
    <div class="sumi-pane">
      <h2>Salvager</h2>
      <div>{{ material.getMaterialData("metal", "") }}</div>
      <div>{{ gatherable.getGatherableData("herb", "") }}</div>
    </div>
  </div>
</template>

<style scoped></style>
