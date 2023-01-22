import { reactive } from "vue";
import { cap } from "./ashfalle.js";

/** Reactive attribute data for Ashfalle playground.
 * @type {object}
 * @property {object} str - strength data
 * @property {object} end - endurance data
 * @property {object} int - intellect data
 * @property {object} tui - intuition data
 * @property {object} apt - aptitude data
 */
const attributeData = reactive({
  str: {
    _id: 0,
    _name: "Strength",
    _description: "Physical power",
    _secondary: {
      _name: "Might",
      _description: "Might affects the attack power of Heavy Weapons",
      increased: 0,
      get value() {
        return attributeData.str.value * 2 + this.increased;
      },
    },
    innate: 1,
    base: 10,
    raised: 0,
    get value() {
      return (this.innate - 1) * 5 + this.base + this.raised;
    },
  },
  end: {
    _id: 1,
    _name: "Endurance",
    _description: "Physical plasticity",
    _secondary: {
      _name: "Finesse",
      _description: "Finesse affects the attack power of Light Weapons and Missile Weapons",
      increased: 0,
      get value() {
        return attributeData.end.value * 2 + this.increased;
      },
    },
    innate: 1,
    base: 10,
    raised: 0,
    get value() {
      return (this.innate - 1) * 5 + this.base + this.raised;
    },
  },
  int: {
    _id: 2,
    _name: "Intellect",
    _description: "Mental power",
    _secondary: {
      _name: "Cunning",
      _description: "Cunning affects the potency of War Chanting",
      increased: 0,
      get value() {
        return attributeData.int.value * 2 + this.increased;
      },
    },
    innate: 1,
    base: 10,
    raised: 0,
    get value() {
      return (this.innate - 1) * 5 + this.base + this.raised;
    },
  },
  tui: {
    _id: 3,
    _name: "Intuition",
    _description: "Mental plasticity",
    _secondary: {
      _name: "Instinct",
      _description: "Instinct affects the potency of Life Chanting",
      increased: 0,
      get value() {
        return attributeData.tui.value * 2 + this.increased;
      },
    },
    innate: 1,
    base: 10,
    raised: 0,
    get value() {
      return (this.innate - 1) * 5 + this.base + this.raised;
    },
  },
  apt: {
    _id: 4,
    _name: "Aptitude",
    _description: "Well-roundedness",
    _secondary: {
      _description: "Aptitude does not govern a secondary attribute",
    },
    innate: 1,
    base: 10,
    raised: 0,
    get value() {
      return (this.innate - 1) * 5 + this.base + this.raised;
    },
  },
});

//
// Utility functions

/** Utility functions for Ashfalle attributes. */
const attribute = {
  /**
   * Get a reactive attribute data object for all attributes.
   * @returns {object} object
   */
  getAttributes() {
    return attributeData;
  },
};

export { attribute };
