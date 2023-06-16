import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "./pages/LandingPage.vue";
import CharactersPage from "./pages/CharactersPage.vue";

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
      name: "characters",
      component: CharactersPage,
    },
  ],
});

export { router };
