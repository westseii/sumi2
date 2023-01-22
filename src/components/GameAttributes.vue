<script setup>
  import { computed } from "vue";
  import { attribute } from "../../public/game/ashfalle.js";

  const attr = attribute.getAttributes();
  const innatePointsRemaining = computed(() => {
    let subtractive = 0;
    for (const i of Object.values(attr)) {
      subtractive += i.innate;
    }
    return 15 - subtractive;
  });
</script>

<template>
  <div class="sumi-pane">
    <h2>Edit Attributes</h2>
    <hr class="sumi-rule-sm" />

    <div>
      <div>Innate points: {{ innatePointsRemaining }}</div>
    </div>

    <div class="sumi-table-headings">
      <div class="sumi-table-col col-1">Attribute</div>
      <div class="sumi-table-col col-2">Innate</div>
      <div class="sumi-table-col col-3">Raised</div>
      <div class="sumi-table-col col-4">Total</div>
      <div class="sumi-table-col col-5">Secondary</div>
      <div class="sumi-table-col col-6">Secondary Total</div>
    </div>
    <div>
      <div
        class="sumi-table-row"
        v-for="a in attr"
      >
        <div class="sumi-table-col col-1">{{ a._name }}</div>
        <div class="sumi-table-col col-2">
          <Slider
            :max="6"
            :min="1"
            :step="1"
            class="attribute-slider"
            v-model="a.innate"
          />
        </div>
        <div class="sumi-table-col col-3">
          <input
            class="attribute-input"
            v-model.number="a.raised"
          />
        </div>
        <div class="sumi-table-col col-4 color-total">{{ a.value }}</div>
        <div class="sumi-table-col col-5">
          <span v-if="a._secondary._name !== undefined">{{ a._secondary._name }}</span>
          <span
            class="color-muted"
            v-else
            >No secondary</span
          >
        </div>
        <div class="sumi-table-col col-6 color-total">
          <span v-if="a._secondary.value !== undefined">{{ a._secondary.value }}</span>
          <span
            class="color-muted"
            v-else
            >-</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .col-1 {
    margin-left: 10px;
  }
  .col-2 {
    left: 110px;
  }
  .col-3 {
    left: 310px;
  }
  .col-4 {
    left: 410px;
  }
  .col-5 {
    left: 510px;
  }
  .col-6 {
    left: 660px;
  }

  .attribute-input {
    height: 15px;
    width: 50px;
  }
  .attribute-slider {
    border-radius: 1px;
    height: 2px;
    width: 150px;
  }

  .color-total {
    color: var(--green-600);
    font-weight: bold;
  }
  .color-muted {
    color: var(--gray-600);
  }
</style>
