import { reactive } from "vue";

const cap = reactive({
  level: 50,
  get skillRaise() {
    return this.level * 2;
  },
});

export { cap };
