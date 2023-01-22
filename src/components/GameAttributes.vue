<script setup>
  import { computed } from "vue";
  import { attribute } from "../../public/game/ashfalle.js";

  const attr = attribute.getAttributes();
  const innatePointsRemaining = computed(() => {
    let subtractive = 0;
    for (const value of Object.values(attr)) {
      subtractive += value.innate;
    }
    return 15 - subtractive;
  });
  const zeroClass = computed(() => (innatePointsRemaining.value < 1 ? "color-zero" : ""));
</script>

<template>
  <div class="sumi-pane">
    <h2>Edit Attributes</h2>
    <!-- informational panel -->
    <div class="sumi-pane">
      <div
        :class="zeroClass"
        v-show="innatePointsRemaining >= 0"
      >
        Innate points: {{ innatePointsRemaining }}
      </div>
      <div
        :class="zeroClass"
        v-show="innatePointsRemaining < 0"
      >
        You've spent too many innate points!
      </div>
    </div>
    <div class="attributes-table">
      <!-- table headings -->
      <div class="sumi-table-headings">
        <div class="sumi-table-col col-1">Attribute</div>
        <div class="sumi-table-col col-2">Innate (spent)</div>
        <div class="sumi-table-col col-3">Raised</div>
        <div class="sumi-table-col col-4">Total</div>
        <div class="sumi-table-col col-5">Secondary</div>
        <div class="sumi-table-col col-6">Secondary Total</div>
      </div>
      <!-- table rows -->
      <div>
        <div
          class="sumi-table-row"
          v-for="a in attr"
        >
          <div
            class="sumi-table-col col-1 color-heading"
            v-tooltip="a._description"
          >
            {{ a._name }}
          </div>
          <div class="sumi-table-col col-2">
            <div class="slider-wrapper">
              <Slider
                :max="6"
                :min="1"
                :step="1"
                class="slider"
                v-model="a.innate"
              />
              <div
                :class="a.innate > 1 && 'color-total'"
                class="slider-total"
              >
                {{ a.innate }}
              </div>
            </div>
          </div>
          <div class="sumi-table-col col-3">{{ a.raised }}</div>
          <div class="sumi-table-col col-4 color-total">{{ a.value }}</div>
          <div
            class="sumi-table-col col-5"
            v-tooltip="a._secondary._description"
          >
            <span v-if="a._secondary._name !== undefined">{{ a._secondary._name }}</span>
            <span
              class="color-muted"
              v-else
            >
              None
            </span>
          </div>
          <div class="sumi-table-col col-6 color-total">
            <span v-if="a._secondary.value !== undefined"> {{ a._secondary.value }}</span>
            <span
              class="color-muted"
              v-else
            >
              -
            </span>
          </div>
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
    left: 125px;
  }
  .col-3 {
    left: 350px;
  }
  .col-4 {
    left: 425px;
  }
  .col-5 {
    left: 500px;
  }
  .col-6 {
    left: 650px;
  }
  .attributes-table {
    width: 800px;
  }

  .slider-wrapper {
    align-items: center;
    display: flex;
    height: 0px;
  }
  .slider {
    border-radius: 2px;
    height: 4px;
    width: 150px;
  }
  .slider-total {
    margin-left: 15px;
  }
</style>
