<script setup></script>

<template>
  <div class="sumi-pane">
    <h2>Edit Skills</h2>
    <div class="skills-table">
      <!-- table headings -->
      <div class="sumi-table-headings">
        <div class="sumi-table-col col-1">Name</div>
        <div class="sumi-table-col col-2">Raised</div>
        <div class="sumi-table-col col-3">Attribute Formula</div>
        <div class="sumi-table-col col-4">Attribute Raised</div>
        <div class="sumi-table-col col-5">Total</div>
      </div>
      <!-- table rows -->
      <div></div>
    </div>
  </div>
</template>

<style scoped>
  .col-1 {
    margin-left: 10px;
  }
  .col-2 {
    left: 100px;
  }
  .col-3 {
    left: 200px;
  }
  .col-4 {
    left: 400px;
  }
  .col-5 {
    left: 550px;
  }
  .attributes-table {
    width: 800px;
  }
</style>
