<script setup>
  import { computed } from "vue";

  const props = defineProps({
    groupName: {
      type: String,
      required: true,
    },
    skillObject: {
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
    switch (props.skillObject.rank) {
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
      :id="skillObject._name"
      :name="groupName"
      :value="skillObject._id"
      class="radio"
      type="radio"
      v-model="value"
    />
    <label
      :for="skillObject._name"
      class="flex-row-rel row label"
    >
      <div :class="rankClass">{{ skillObject._name }}</div>
      <div class="col-2 color-formula">{{ skillObject._formulaHint }}</div>
      <div class="col-3">{{ skillObject.raised }}</div>
      <div class="col-4 color-total">{{ skillObject.value }}</div>
    </label>
  </div>
</template>

<style scoped>
  .flex-row-rel {
    display: flex;
    position: relative;
  }

  .col-2 {
    left: 200px;
    position: absolute;
  }
  .col-3 {
    left: 525px;
    position: absolute;
  }
  .col-4 {
    left: 600px;
    position: absolute;
  }

  .radio {
    display: none;
  }
  .radio:checked ~ .label {
    outline-offset: -1px;
    outline: solid 1px var(--primary-color);
  }

  .row {
    border-bottom: solid 1px var(--surface-border);
    line-height: 0;
    padding: 16px 8px;
    box-sizing: border-box;
  }
  .row:hover {
    background: var(--surface-hover);
  }

  .color-specialized {
    color: var(--blue-600);
  }
  .color-trained {
    color: var(--green-600);
  }
  .color-untrained {
    color: var(--gray-400);
  }

  .color-formula {
    color: var(--bluegray-600);
  }

  .color-total {
    color: var(--green-600);
    font-weight: bold;
  }
</style>
