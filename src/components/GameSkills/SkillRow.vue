<script setup>
  import { computed } from "vue";

  const props = defineProps({
    radioGroupName: {
      type: String,
      required: true,
    },
    skillData: {
      type: Object,
      required: true,
    },
    modelValue: Number,
  });

  const emit = defineEmits(["update:modelValue"]);

  const value = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit("update:modelValue", value);
    },
  });

  const rankClass = computed(() => {
    switch (props.skillData.rank) {
      case 0:
        return "color-untrained";
      case 1:
        return "color-trained";
      case 2:
        return "color-specialized";
    }
  });
</script>

<template>
  <div>
    <input
      :id="skillData._name"
      :name="radioGroupName"
      :value="skillData._id"
      class="radio"
      type="radio"
      v-model="value"
    />
    <label
      :for="skillData._name"
      class="sumi-table-row label"
    >
      <div
        :class="rankClass"
        class="sumi-table-col col-1"
      >
        {{ skillData._name }}
      </div>
      <div class="sumi-table-col col-2">{{ skillData.raised }}</div>
      <div class="sumi-table-col col-3">{{ skillData._formulaHint }}</div>
      <div class="sumi-table-col col-4 color-total">{{ skillData.value }}</div>
      <div class="raise-buttons">
        <Button
          class="p-button-rounded p-button-outlined button-raise"
          icon="pi pi-arrow-up"
        />
        <Button
          class="p-button-rounded p-button-outlined"
          icon="pi pi-arrow-down"
        />
      </div>
    </label>
  </div>
</template>

<style scoped>
  .col-1 {
    margin-left: 10px;
  }
  .col-2 {
    left: 175px;
  }
  .col-3 {
    left: 250px;
  }
  .col-4 {
    left: 550px;
  }

  .raise-buttons {
    align-self: center;
    margin-right: 10px;
    position: absolute;
    right: 0;
  }
  .button-raise {
    margin-right: 5px;
  }

  .radio {
    display: none;
  }
  .radio:checked ~ .label {
    outline-offset: -1px;
    outline: solid 1px var(--primary-color);
  }
</style>
