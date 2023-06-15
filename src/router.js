import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "./pages/LandingPage.vue";
import charactersPage from "./pages/charactersPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/characters",
      name: "charactes",
      component: charactersPage,
    }
  ],
});

export { router };
