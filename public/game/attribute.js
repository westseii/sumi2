import { reactive } from "vue";

/** Reactive attribute data for Ashfalle playground.
 * @type {object}
 * @property {object} str - strength attribute data
 * @property {object} end - endurance attribute data
 * @property {object} int - intellect attribute data
 * @property {object} tui - intuition attribute data
 * @property {object} apt - aptitude attribute data
 */
const attribute = reactive({
  str: {
    _id: 0,
    _name: "Strength",
    _description: "Physical power.",
    _secondary: {
      _name: "Might",
      increased: 0,
      get value() {
        return attribute.str.value * 2 + this.increased;
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
    _description: "Physical plasticity.",
    _secondary: {
      _name: "Finesse",
      increased: 0,
      get value() {
        return attribute.end.value * 2 + this.increased;
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
    _description: "Mental power.",
    _secondary: {
      _name: "Cunning",
      increased: 0,
      get value() {
        return attribute.int.value * 2 + this.increased;
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
    _description: "Mental plasticity.",
    _secondary: {
      _name: "Instinct",
      increased: 0,
      get value() {
        return attribute.tui.value * 2 + this.increased;
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
    _description: "Well-roundedness.",
    _secondary: "None",
    innate: 1,
    base: 10,
    raised: 0,
    get value() {
      return (this.innate - 1) * 5 + this.base + this.raised;
    },
  },
});

export { attribute };
