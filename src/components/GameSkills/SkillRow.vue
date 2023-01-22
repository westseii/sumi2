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
      class="flex-row-rel row label"
    >
      <div :class="rankClass">{{ skillData._name }}</div>
      <div class="col-2 color-formula">{{ skillData._formulaHint }}</div>
      <div class="col-3">{{ skillData.raised }}</div>
      <div class="col-4 color-total">{{ skillData.value }}</div>
    </label>
  </div>
</template>

<style scoped>
  .radio {
    display: none;
  }
  .radio:checked ~ .label {
    outline-offset: -1px;
    outline: solid 1px var(--primary-color);
  }
</style>
