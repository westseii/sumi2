<script setup>
  import { computed } from "vue";
  import SkillRow from "../components/GameSkills/SkillRow.vue";
  import { skill } from "../../public/game/ashfalle.js";

  const skl = skill.getSkills();

  const specialized = computed(() => Object.values(skl).filter((s) => s.rank === 2));
  const trained = computed(() => Object.values(skl).filter((s) => s.rank === 1));
  const untrained = computed(() => Object.values(skl).filter((s) => s.rank === 0));
</script>

<template>
  <div class="sumi-pane">
    <h2>Edit Skills</h2>
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
      <div
        class="rank color-trained"
        v-show="trained.length"
      >
        Trained ({{ trained.length }})
      </div>
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
        v-for="s in skl"
      />
    </div>
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

  .rank {
    font-weight: bold;
    line-height: 0;
    padding: 30px 0 10px 10px;
  }

  .skills-table {
    width: 800px;
  }
</style>
