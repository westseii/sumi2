import { computed, reactive } from "vue";
import { attribute } from "./attribute.js";
import { cap } from "./cap.js";

const rankMultiplier = 5;

const rankCostCombat = {
  train: 8,
  specialize: 12,
};
const rankCostMitigation = {
  train: 6,
  specialize: 10,
};
const rankCostTrade = {
  train: 4,
  specialize: 8,
};
const rankCostUtility = {
  train: 4,
  specialize: Infinity,
};

/** Reactive skill data for Ashfalle playground.
 * @type {object}
 */
const skillData = reactive({
  //
  // Combat skills
  heavyWeapons: {
    _id: 0,
    _name: "Heavy Weapons",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostCombat,
    _formulaHint: `${attribute.str._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.str.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  lifeChanting: {
    _id: 1,
    _name: "Life Chanting",
    _description:
      "The commanding of life through magical chants. Heal, harm, and infuse yourself and others with powerful vitality chants.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostCombat,
    _formulaHint: `${attribute.tui._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.tui.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  lightWeapons: {
    _id: 2,
    _name: "Light Weapons",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostCombat,
    _formulaHint: `${attribute.end._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.end.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  missileWeapons: {
    _id: 3,
    _name: "Missile Weapons",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostCombat,
    _formulaHint: `${attribute.end._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.end.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  warChanting: {
    _id: 4,
    _name: "War Chanting",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostCombat,
    _formulaHint: `${attribute.int._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.int.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },

  //
  // Mitigation skills
  evasiveTactics: {
    _id: 5,
    _name: "Evasive Tactics",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostMitigation,
    _formulaHint: `(${attribute.str._name} + ${attribute.end._name}) / 4`,
    _formulaRaise: computed(() => Math.floor((attribute.str.value + attribute.end.value) / 4)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  resilientTactics: {
    _id: 6,
    _name: "Resilient Tactics",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostMitigation,
    _formulaHint: `(${attribute.str._name} + ${attribute.end._name}) / 4`,
    _formulaRaise: computed(() => Math.floor((attribute.str.value + attribute.end.value) / 4)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  warding: {
    _id: 7,
    _name: "Warding",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostMitigation,
    _formulaHint: `(${attribute.int._name} + ${attribute.tui._name}) / 4`,
    _formulaRaise: computed(() => Math.floor((attribute.int.value + attribute.tui.value) / 4)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },

  //
  // Trade skills
  alchemy: {
    _id: 8,
    _name: "Alchemy",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostTrade,
    _formulaHint: `(${attribute.int._name} + ${attribute.apt._name}) / 4`,
    _formulaRaise: computed(() => Math.floor((attribute.int.value + attribute.apt.value) / 4)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  armorsmithing: {
    _id: 9,
    _name: "Armorsmithing",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostTrade,
    _formulaHint: `(${attribute.str._name} + ${attribute.apt._name}) / 4`,
    _formulaRaise: computed(() => Math.floor((attribute.str.value + attribute.apt.value) / 4)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  bowyer: {
    _id: 10,
    _name: "Bowyer",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostTrade,
    _formulaHint: `(${attribute.end._name} + ${attribute.apt._name}) / 4`,
    _formulaRaise: computed(() => Math.floor((attribute.end.value + attribute.apt.value) / 4)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  jeweler: {
    _id: 11,
    _name: "Jeweler",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostTrade,
    _formulaHint: `(${attribute.tui._name} + ${attribute.apt._name}) / 4`,
    _formulaRaise: computed(() => Math.floor((attribute.tui.value + attribute.apt.value) / 4)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  leatherworking: {
    _id: 12,
    _name: "Leatherworking",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostTrade,
    _formulaHint: `(${attribute.end._name} + ${attribute.apt._name}) / 4`,
    _formulaRaise: computed(() => Math.floor((attribute.end.value + attribute.apt.value) / 4)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },

  //
  // Hybrid trade skills
  tailoring: {
    _id: 13,
    _name: "Tailoring",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostTrade,
    _formulaHint: `(${attribute.int._name} OR ${attribute.tui._name} + ${attribute.apt._name}) / 4`,
    _formulaRaise: computed(() =>
      Math.floor(
        ((attribute.int.value > attribute.tui.value ? attribute.int.value : attribute.tui.value) +
          attribute.apt.value) /
          4
      )
    ),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  thaumaturgy: {
    _id: 14,
    _name: "Thaumaturgy",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostTrade,
    _formulaHint: `(${attribute.int._name} OR ${attribute.tui._name} + ${attribute.apt._name}) / 4`,
    _formulaRaise: computed(() =>
      Math.floor(
        ((attribute.int.value > attribute.tui.value ? attribute.int.value : attribute.tui.value) +
          attribute.apt.value) /
          4
      )
    ),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  weaponsmithing: {
    _id: 15,
    _name: "Weaponsmithing",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostTrade,
    _formulaHint: `(${attribute.str._name} OR ${attribute.end._name} + ${attribute.apt._name}) / 4`,
    _formulaRaise: computed(() =>
      Math.floor(
        ((attribute.str.value > attribute.end.value ? attribute.str.value : attribute.end.value) +
          attribute.apt.value) /
          4
      )
    ),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },

  //
  // Utility skills
  angling: {
    _id: 16,
    _name: "Angling",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostUtility,
    _formulaHint: `${attribute.apt._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.apt.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  botany: {
    _id: 17,
    _name: "Botany",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostUtility,
    _formulaHint: `${attribute.apt._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.apt.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  butchery: {
    _id: 18,
    _name: "Butchery",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostUtility,
    _formulaHint: `${attribute.apt._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.apt.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  cooking: {
    _id: 19,
    _name: "Cooking",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostUtility,
    _formulaHint: `${attribute.apt._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.apt.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  mining: {
    _id: 20,
    _name: "Mining",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostUtility,
    _formulaHint: `${attribute.apt._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.apt.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  resourcefulness: {
    _id: 21,
    _name: "Resourcefulness",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostUtility,
    _formulaHint: `${attribute.apt._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.apt.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  runereading: {
    _id: 22,
    _name: "Runereading",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostUtility,
    _formulaHint: `${attribute.apt._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.apt.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  runicInscription: {
    _id: 23,
    _name: "Runic Inscription",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostUtility,
    _formulaHint: `${attribute.apt._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.apt.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  summoning: {
    _id: 24,
    _name: "Summoning",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostUtility,
    _formulaHint: `${attribute.apt._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.apt.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },
  triage: {
    _id: 25,
    _name: "Triage",
    _description: "Todo.",
    raised: 0,
    rank: 0,
    _rankCost: rankCostUtility,
    _formulaHint: `${attribute.apt._name} / 2`,
    _formulaRaise: computed(() => Math.floor(attribute.apt.value / 2)),
    get value() {
      return this.raised + this._formulaRaise + this.rank * rankMultiplier;
    },
  },

  //
  // Custom skills
  // add custom skills/imports here
  // ...
  // customSkill: {
  //   _id: 1000,
  //   _name: "Custom Skill",
  //   _description: "Todo.",
  //   raised: 0,
  //   rank: 0,
  //   _rankCost: rankCostUtility,
  //   _formulaHint: `...`,
  //   _formulaRaise: computed(() => 0),
  //   get value() {
  //     return this.raised + this._formulaRaise + this.rank * rankMultiplier;
  //   },
  // },
});

//
// Utility functions

/** Utility functions for Ashfalle skills. */
const skill = {
  /**
   * Get a reactive skill data object for all skills.
   * @returns {object} object
   */
  getSkills() {
    return skillData;
  },
  /**
   * Get a reactive skill data object for a given skill id.
   * @param {number} id
   * @returns {object} object
   */
  getSkillById(id) {
    return Object.values(skillData).find((skill) => skill._id === id);
  },
};

export { skill };
