<script setup>
  import { computed, ref } from "vue";
  import { cap, findSkillById, skill } from "../../public/game/ashfalle.js";
  import SkillRow from "./GameSkills/SkillRow.vue";

  const selectedSkillId = ref();
  const selectedSkillObject = computed(() => Object.values(skill)[selectedSkillId.value]);

  const skillsSpecialized = computed(() => Object.values(skill).filter((skl) => skl.rank === 2));
  const skillsTrained = computed(() => Object.values(skill).filter((skl) => skl.rank === 1));
  const skillsUntrained = computed(() => Object.values(skill).filter((skl) => skl.rank === 0));

  function skillRankUp() {
    if (selectedSkillId.value > -1) {
      const skill = findSkillById(selectedSkillId.value);
      if (skill.rank < 2) skill.rank++;
    }
  }
  function skillRankDown() {
    if (selectedSkillId.value > -1) {
      const skill = findSkillById(selectedSkillId.value);
      if (skill.rank > 0) skill.rank--;
    }
  }
  function skillRaise() {
    if (selectedSkillId.value > -1) {
      const skill = findSkillById(selectedSkillId.value);
      if (skill.raised < cap.skillRaise) skill.raised++;
    }
  }
</script>

<template>
  <div>
    <div class="container">
      <div class="skill-pane sumi-pane">
        <h2>Skills</h2>
        <hr class="sumi-rule-sm" />

        <div class="flex-row-rel table-label-row">
          <div class="table-label">Name</div>
          <div class="col-2 table-label">Formula</div>
          <div class="col-3 table-label">Raised</div>
          <div class="col-4 table-label">Total</div>
        </div>
        <hr class="sumi-rule-sm" />

        <div
          class="rank-row table-label color-specialized"
          v-show="skillsSpecialized.length"
        >
          Specialized ({{ skillsSpecialized.length }})
        </div>
        <div class="skill-group">
          <SkillRow
            :key="skl._id"
            :skill-object="skl"
            group-name="skills"
            v-for="skl in skillsSpecialized"
            v-model="selectedSkillId"
          />
        </div>

        <div
          class="rank-row table-label color-trained"
          v-show="skillsTrained.length"
        >
          Trained ({{ skillsTrained.length }})
        </div>
        <div class="skill-group">
          <SkillRow
            :key="skl._id"
            :skill-object="skl"
            group-name="skills"
            v-for="skl in skillsTrained"
            v-model="selectedSkillId"
          />
        </div>

        <div
          class="rank-row table-label color-untrained"
          v-show="skillsUntrained.length"
        >
          Untrained ({{ skillsUntrained.length }})
        </div>
        <div class="skill-group">
          <SkillRow
            :key="skl._id"
            :skill-object="skl"
            group-name="skills"
            v-for="skl in skillsUntrained"
            v-model="selectedSkillId"
          />
        </div>
      </div>

      <div
        class="edit-pane sumi-pane"
        v-if="selectedSkillId > -1"
      >
        <div class="table-label-row">
          <div class="table-label">{{ selectedSkillObject._name }}</div>
        </div>
        <hr class="sumi-rule-sm" />

        <div class="description">{{ selectedSkillObject._description }}</div>
        <hr class="sumi-rule-sm" />

        <div>Rank:</div>
        <Button
          @click="skillRankUp"
          class="p-button-outlined p-inputtext-sm"
          icon="pi pi-arrow-up"
        />
        <Button
          @click="skillRankDown"
          class="p-button-outlined p-inputtext-lg"
          icon="pi pi-arrow-down"
        />
        <br /><br />

        <div>Raise:</div>
        <Button
          @click="skillRaise"
          class="p-button-outlined"
          icon="pi pi-arrow-up"
        />
        <hr class="sumi-rule-sm" />

        <div>Train: {{ selectedSkillObject._rankCost.train }}</div>
        <div v-show="selectedSkillObject._rankCost.specialize !== Infinity">
          Specialize: {{ selectedSkillObject._rankCost.specialize }}
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

  .container {
    display: flex;
  }

  .table-label {
    font-weight: bold;
  }
  .table-label-row {
    line-height: 0;
    padding: 10px;
  }

  .rank-row {
    line-height: 0;
    padding: 24px 8px;
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

  .skill-group {
    max-height: 300px;
    overflow: scroll;
  }

  .skill-pane {
    width: 700px;
  }

  .edit-pane {
    align-self: flex-start;
    margin-left: 10px;
    width: 300px;
  }

  .description {
    color: var(--text-color-secondary);
    height: 100px;
    overflow: scroll;
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
</style>
