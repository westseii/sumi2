<script setup>
  import { computed, ref } from "vue";
  import SkillRow from "../components/GameSkills/SkillRow.vue";
  import { skill } from "../../public/game/ashfalle.js";

  const skl = skill.getSkills();

  const specialized = computed(() => Object.values(skl).filter((s) => s.rank === 2));
  const trained = computed(() => Object.values(skl).filter((s) => s.rank === 1));
  const untrained = computed(() => Object.values(skl).filter((s) => s.rank === 0));

  const selectedId = ref();
  const selectedData = computed(() => skill.getSkillById(selectedId.value));
</script>

<template>
  <div class="flex">
    <div class="sumi-pane">
      <h2>Edit Skills</h2>
      <div class="sumi-pane">
        <p>Select a skill to see more info.</p>
      </div>
      <br />
      <div class="sumi-todo">
        <h3>TODO</h3>
        <ul>
          <li>Only allow rank up iff there are enough unspent skill points to do so.</li>
          <li>Change raised column to editable number inputs.</li>
        </ul>
      </div>
      <div class="skills-table">
        <!-- table headings -->
        <div class="sumi-table-headings">
          <div class="sumi-table-col col-1">Name</div>
          <div class="sumi-table-col col-2">Raised</div>
          <div class="sumi-table-col col-3">Attribute Formula</div>
          <div class="sumi-table-col col-4">Total</div>
        </div>
        <!-- table rows -->
        <div
          class="rank color-specialized"
          v-show="specialized.length"
        >
          Specialized ({{ specialized.length }})
        </div>
        <SkillRow
          :key="s._id"
          :skill-data="s"
          radio-group-name="skills"
          v-for="s in specialized"
          v-model="selectedId"
        />
        <div
          class="rank color-trained"
          v-show="trained.length"
        >
          Trained ({{ trained.length }})
        </div>
        <SkillRow
          :key="s._id"
          :skill-data="s"
          radio-group-name="skills"
          v-for="s in trained"
          v-model="selectedId"
        />
        <div
          class="rank color-untrained"
          v-show="untrained.length"
        >
          Untrained ({{ untrained.length }})
        </div>
        <SkillRow
          :key="s._id"
          :skill-data="s"
          radio-group-name="skills"
          v-for="s in untrained"
          v-model="selectedId"
        />
      </div>
    </div>
    <div
      class="sumi-pane skill-info"
      v-if="selectedId > -1"
    >
      <h2>{{ selectedData._name }}</h2>
      <!-- skill info panel -->
      <div class="sumi-pane skill-info-inner">
        <p>{{ selectedData._description }}</p>
        <div>
          <span class="bubble train-bubble">{{ selectedData._rankCost.train }}</span>
          <span
            class="bubble specialize-bubble"
            v-show="selectedData._rankCost.specialize !== Infinity"
          >
            {{ selectedData._rankCost.specialize }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .flex {
    display: flex;
  }

  .skill-info {
    align-self: flex-start;
    margin-left: 10px;
    width: 400px;
  }
  .skill-info-inner {
    width: 100%;
  }

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

  .rank {
    font-weight: bold;
    line-height: 0;
    padding: 30px 0 11px 10px;
  }

  .bubble {
    border-radius: 10px;
    display: inline-block;
    line-height: 0;
    padding: 10px 0;
    text-align: center;
    width: 40px;
  }
  .train-bubble {
    background: var(--green-600);
  }
  .specialize-bubble {
    background: var(--blue-600);
    margin-left: 5px;
  }

  .skills-table {
    width: 800px;
  }
</style>
