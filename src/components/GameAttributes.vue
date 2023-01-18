<script setup>
  import { ref } from "vue";
  import { attribute } from "../../public/game/ashfalle.js";

  const isEdit = ref(false);
</script>

<template>
  <div>
    <div class="attribute-pane sumi-pane">
      <div v-show="!isEdit">
        <h2>Attributes</h2>
        <ToggleButton
          offIcon="pi pi-lock"
          offLabel="Edit"
          onIcon="pi pi-unlock"
          onLabel="Edit"
          v-model="isEdit"
        />
        <hr class="sumi-rule-sm" />

        <div class="flex-row-rel table-label-row">
          <div class="table-label">Name</div>
          <div class="col-2 table-label">Innate</div>
          <div class="col-3 table-label">Raised</div>
          <div class="col-4 table-label">Total</div>
          <div class="col-5 table-label">Other</div>
        </div>
        <hr class="sumi-rule-sm" />

        <div
          :key="att._id"
          class="flex-row-rel row"
          v-for="att in attribute"
        >
          <div>{{ att._name }}</div>
          <div class="col-2">{{ att.innate }}</div>
          <div class="col-3">{{ att.raised }}</div>
          <div class="col-4 color-total">{{ att.value }}</div>
          <div class="col-5">{{ att._secondary._name }}</div>
        </div>
      </div>

      <div v-show="isEdit">
        <h2>Edit attributes</h2>
        <ToggleButton
          offIcon="pi pi-lock"
          offLabel="Edit"
          onIcon="pi pi-unlock"
          onLabel="Edit"
          v-model="isEdit"
        />
        <hr class="sumi-rule-sm" />

        <div class="innate-slider">
          <Slider
            :max="6"
            :min="1"
            :step="1"
            v-model="attribute.str.innate"
          />
        </div>
        <div class="innate-slider">
          <Slider
            :max="6"
            :min="1"
            :step="1"
            v-model="attribute.end.innate"
          />
        </div>
        <div class="innate-slider">
          <Slider
            :max="6"
            :min="1"
            :step="1"
            v-model="attribute.int.innate"
          />
        </div>
        <div class="innate-slider">
          <Slider
            :max="6"
            :min="1"
            :step="1"
            v-model="attribute.tui.innate"
          />
        </div>
        <div class="innate-slider">
          <Slider
            :max="6"
            :min="1"
            :step="1"
            v-model="attribute.apt.innate"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .flex-row-rel {
    display: flex;
    position: relative;
  }

  .table-label {
    font-weight: bold;
  }
  .table-label-row {
    line-height: 0;
    padding: 10px;
  }

  .row {
    border-bottom: solid 1px var(--surface-border);
    line-height: 0;
    padding: 30px 10px;
  }
  .row:hover {
    background: var(--surface-hover);
  }

  .col-2 {
    left: 150px;
    position: absolute;
  }
  .col-3 {
    left: 250px;
    position: absolute;
  }
  .col-4 {
    left: 350px;
    position: absolute;
  }
  .col-5 {
    left: 500px;
    position: absolute;
  }

  .attribute-pane {
    width: 700px;
  }

  .innate-slider {
    height: 0;
    padding: 30px 10px;
    width: 350px;
  }

  .color-total {
    color: var(--green-600);
    font-weight: bold;
  }
</style>
