import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/stats",
      redirect: "/stats/attributes",
      name: "stats",
      component: () => import("../views/StatsView.vue"),
      children: [
        {
          path: "attributes",
          component: () => import("../components/GameAttributes.vue"),
        },
        {
          path: "skills",
          component: () => import("../components/GameSkills.vue"),
        },
      ],
    },
    {
      path: "/crafting",
      redirect: "/crafting/salvager",
      name: "crafting",
      component: () => import("../views/CraftingView.vue"),
      children: [
        {
          path: "salvager",
          component: () => import("../components/Salvager.vue"),
        },
      ],
    },
  ],
});

export default router;
