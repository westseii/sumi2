import { reactive } from "vue";

/** Caps upon which many of Ashfalle's game systems rely.
 * @type {object}
 * @property {number} level - creature level
 * @property {number} skillRaise - skill raise cap, scaled to creature level
 */
const cap = reactive({
  level: 50,
  get raise() {
    return this.level * 2;
  },
});

export { cap };
